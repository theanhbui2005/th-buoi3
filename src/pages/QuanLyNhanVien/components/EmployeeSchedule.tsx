import { Card, TimePicker, Button, message, Table } from 'antd';
import { useModel } from 'umi';
import { useState } from 'react';
import type { Moment } from 'moment';

interface TimeSlot {
  startTime: Moment | null;
  endTime: Moment | null;
}

interface DaySchedule {
  timeSlots: TimeSlot[];
}

interface EmployeeSchedule {
  [key: string]: {
    [day: string]: DaySchedule;
  };
}

const EmployeeScheduleComponent = () => {
  const { data } = useModel('quanlynhanvien');
  const [schedules, setSchedules] = useState<EmployeeSchedule>({});
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleTimeChange = (employeeId: string, day: string, index: number, times: [Moment, Moment] | null) => {
    setSchedules(prev => ({
      ...prev,
      [employeeId]: {
        ...prev[employeeId],
        [day]: {
          timeSlots: [
            ...(prev[employeeId]?.[day]?.timeSlots || []).slice(0, index),
            { startTime: times?.[0] || null, endTime: times?.[1] || null },
            ...(prev[employeeId]?.[day]?.timeSlots || []).slice(index + 1),
          ],
        },
      },
    }));
  };

  const addTimeSlot = (employeeId: string, day: string) => {
    setSchedules(prev => ({
      ...prev,
      [employeeId]: {
        ...prev[employeeId],
        [day]: {
          timeSlots: [
            ...(prev[employeeId]?.[day]?.timeSlots || []),
            { startTime: null, endTime: null },
          ],
        },
      },
    }));
  };

  const columns = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
      width: 100,
    },
    {
      title: 'Time Slots',
      dataIndex: 'timeSlots',
      key: 'timeSlots',
      render: (_: any, record: { day: string, employeeId: string }) => {
        const daySchedule = schedules[record.employeeId]?.[record.day]?.timeSlots || [];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {daySchedule.map((slot, index) => (
              <TimePicker.RangePicker
                key={`${record.employeeId}-${record.day}-${index}`}
                format="HH:mm"
                value={[daySchedule[index].startTime, daySchedule[index].endTime] as [Moment, Moment]}
                onChange={(times) => handleTimeChange(record.employeeId, record.day, index, times as [Moment, Moment])}
              />
            ))}
            <Button
              type="dashed"
              size="small"
              onClick={() => addTimeSlot(record.employeeId, record.day)}
            >
              + Add Time Slot
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {data?.map((employee: any) => (
        <Card title={`Schedule for ${employee.name}`} key={employee.id}>
          <Table
            dataSource={days.map(day => ({ day, employeeId: employee.id }))}
            columns={columns}
            pagination={false}
            rowKey="day"
          />
        </Card>
      ))}
    </div>
  );
};

export default EmployeeScheduleComponent;
