import os
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, DateTime, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Avatar(Base):
    __tablename__ = 'avatars'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nickname = Column(String(255), nullable=False)
    favorite_song = Column(String(255), nullable=False)
    favorite_food = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=func.now())

class AvatarCreate(BaseModel):
    nickname: str
    favorite_song: str
    favorite_food: str

    class Config:
        orm_mode = True

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/create_character", response_model=AvatarCreate)
def create_character(avatar: AvatarCreate, db: Session = Depends(get_db)):
    new_avatar = Avatar(
        nickname=avatar.nickname,
        favorite_song=avatar.favorite_song,
        favorite_food=avatar.favorite_food
    )
    db.add(new_avatar)
    db.commit()
    db.refresh(new_avatar)
    return new_avatar