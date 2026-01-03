type UserRole = 'student' | 'donor' | 'admin';

type KycStatus = 'pending' | 'approved' | 'rejected';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  role: UserRole;
  telephone: string;
  avatar?: string;
  balance: number;
}

export interface Student extends User {
  department?: string;
  matricule?: string;
  school?: string;
  level?: string;
  verification_status: KycStatus;
  verification_note: string;
}

export interface Donor extends User {
  occupation?: string;
}

export type KycDocumentType = 'school_id' | 'fees_receipt' | 'other';

export interface KYCDocument {
  id: string;
  type: KycDocumentType;
  file_url: string;
  owner: number;
  uploaded_at: string;
}
