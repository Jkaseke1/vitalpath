import traceback
from fastapi import APIRouter, HTTPException, Request
from models.waitlist import WaitlistEntry
from services.waitlist_service import add_to_waitlist, read_waitlist, write_waitlist

router = APIRouter()

@router.post("/waitlist")
async def join_waitlist(entry: WaitlistEntry):
    try:
        new_entry = add_to_waitlist(entry)
        return {"success": True, "entry": new_entry.dict()}
    except Exception as e:
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/waitlist/verify-token")
async def verify_token(token: str):
    try:
        entries = read_waitlist()
        for entry in entries:
            if entry.registrationToken == token:
                return {"user": entry.dict()}
        raise HTTPException(status_code=404, detail="Invalid token")
    except HTTPException:
        raise
    except Exception as e:
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/waitlist/update-registration")
async def update_registration(request: Request):
    try:
        data = await request.json()
        token = data.get('token')
        if not token:
            raise HTTPException(status_code=400, detail="Token required")

        entries = read_waitlist()
        for i, entry in enumerate(entries):
            if entry.registrationToken == token:
                current = entry.dict()
                for k, v in data.items():
                    if k not in ('token', 'role', 'id', 'registrationToken', 'timestamp') and v is not None and v != '':
                        current[k] = v
                entries[i] = WaitlistEntry(**current)
                write_waitlist(entries)
                return {"success": True}
        raise HTTPException(status_code=404, detail="Invalid token")
    except HTTPException:
        raise
    except Exception as e:
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/waitlist")
async def get_waitlist():
    try:
        entries = read_waitlist()
        return {"waitlist": [entry.dict() for entry in entries]}
    except Exception as e:
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))
