# Node.js 18 버전을 기반으로 하는 빌드 환경 설정
FROM node:18 as build

# 작업 디렉토리 설정
WORKDIR /app

# package.json 파일을 복사
COPY package.json ./

# 의존성 설치
RUN npm install

# 나머지 소스 파일 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# Nginx 알파인 버전으로 실행 환경 설정
FROM nginx:alpine

# 빌드된 파일을 Nginx의 HTML 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 80 포트 열기
EXPOSE 80

# Nginx를 포그라운드에서 실행
CMD ["nginx", "-g", "daemon off;"]