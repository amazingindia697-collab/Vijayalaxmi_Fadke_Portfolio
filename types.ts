
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
