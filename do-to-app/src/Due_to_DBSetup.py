import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine


Base = declarative_base()


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)


class Group(Base):
    __tablename__ = 'group'
    id = Column(Integer, primary_key=True)


class Task(base):
    __tablename__ = 'task'
    id = Column(Integer, primary_key=True)



engine = create_engine('sqlite:///due_to.db')

Base.metadata.create_all(engine)
