from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers.waitlist import router as waitlist_router
import socket

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

app = FastAPI(title="Health App Backend", version="1.0.0")

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(waitlist_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Health App Backend API"}

@app.get("/config")
def get_config():
    return {"ip": get_local_ip()}
