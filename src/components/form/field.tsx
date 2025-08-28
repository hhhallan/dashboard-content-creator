'use client';

import { Clock } from 'lucide-react';
import { useState } from 'react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { cn } from '../../lib/utils';
import { DatePicker } from '../ui/date-picker';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface FieldProps {
  label: string;
  name: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'textarea'
    | 'date'
    | 'time';
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  error?: string;
  className?: string;

  // RHF
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;

  value?: any;
  onChange?: (value: any) => void;
}

export const Field = ({
  name,
  label,
  type = 'text',
  placeholder,
  defaultValue,
  required = false,
  error,
  className = '',
  register,
  rules,
  value,
  onChange,
}: FieldProps) => {
  const invalid = !!error;
  const fieldClassName = cn(invalid ? 'border-red-500' : '');
  const isRequiredStar =
    required ||
    (typeof rules?.required === 'string' ? true : !!rules?.required);

  const reg = register ? register(name, { required, ...rules }) : undefined;
  const describedBy = invalid ? `${name}-error` : undefined;

  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [timeValue, setTimeValue] = useState<string>(
    value ? new Date(value).toTimeString().slice(0, 5) : ''
  );

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onChange && selectedDate) {
      onChange(selectedDate.toISOString());
    }
  };

  const handleTimeChange = (val: string) => {
    setTimeValue(val);
    if (onChange && val) {
      const [hours, minutes] = val.split(':');
      const timeDate = new Date();
      timeDate.setHours(Number.parseInt(hours), Number.parseInt(minutes), 0, 0);
      onChange(timeDate.toISOString());
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={name}>
        {label}
        {isRequiredStar && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {type === 'date' ? (
        <DatePicker
          date={date}
          setDate={handleDateSelect}
          placeholder={placeholder || 'Sélectionner une date'}
          className={fieldClassName}
        />
      ) : type === 'time' ? (
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="time"
            value={timeValue}
            onChange={e => handleTimeChange(e.target.value)}
            placeholder={placeholder || '--:--'}
            className={cn('pl-10', fieldClassName)}
            aria-invalid={invalid ? 'true' : 'false'}
            aria-describedby={describedBy}
          />
        </div>
      ) : type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={fieldClassName}
          aria-invalid={invalid ? 'true' : 'false'}
          aria-describedby={describedBy}
          {...reg}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={fieldClassName}
          aria-invalid={invalid ? 'true' : 'false'}
          aria-describedby={describedBy}
          {...reg}
        />
      )}

      {error && (
        <p id={`${name}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
