'use client';

import { cn } from '../../lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface FieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  error?: string;
  className?: string;
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
}: FieldProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={name}
        defaultValue={defaultValue}
        className={error ? 'border-red-500' : ''}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
