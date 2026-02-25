from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class WaitlistEntry(BaseModel):
    id: Optional[str] = None
    firstName: str
    email: str
    role: str
    timestamp: Optional[datetime] = None
    registrationToken: Optional[str] = None
    age: Optional[str] = None
    gender: Optional[str] = None
    conditions: Optional[str] = None
    specialty: Optional[str] = None
    experience: Optional[str] = None
    hospital: Optional[str] = None
    licenseNumber: Optional[str] = None
    pharmacyName: Optional[str] = None
    dieticianCert: Optional[str] = None
    fitnessCert: Optional[str] = None
