import type { ReactNode } from 'react';

export type ImpactCardProps = {
  label: string;
  children: ReactNode;
};

export function ImpactCard({ label, children }: ImpactCardProps) {
  return (
    <div className="impact-card">
      <span className="impact-card-label">{label}</span>
      <p className="impact-card-text">{children}</p>
    </div>
  );
}
