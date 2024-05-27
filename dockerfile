# Etapa 1: Build da aplicação
FROM node:21.7.1-alpine AS build

# Crie o diretório de trabalho
WORKDIR /app

# Instale o Ionic CLI globalmente
RUN npm install -g npm@10.0.0 && npm install -g @ionic/cli@7.2.0

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto
COPY . .

# Faça o build da aplicação
RUN ionic build --prod

# Etapa 2: Servindo a aplicação com Nginx
FROM nginx:alpine

# Remova o arquivo de configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie os arquivos de build da etapa anterior para o diretório padrão do Nginx
COPY --from=build /app/www /usr/share/nginx/html

# Exponha a porta
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
