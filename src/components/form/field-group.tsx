'use client';

interface FieldGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const FieldGroup = ({ children, className = '' }: FieldGroupProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{children}</div>
  );
};
