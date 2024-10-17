# 베이스 이미지로 Python 3.11 사용
FROM python:3.11-slim

# 작업 디렉터리 설정
WORKDIR /app

# 시스템 패키지 업데이트 및 설치
RUN apt-get update && apt-get install -y --no-install-recommends gcc

# 프로젝트의 종속성을 복사하고 설치 (requirements.txt 복사)
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && pip install --no-cache-dir -r /app/requirements.txt

# 프로젝트 소스 코드 복사
COPY . /app

# FastAPI 애플리케이션 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]