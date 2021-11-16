cloner le repo: git clone

renommer le fichier .env.example en .env

INSTALLER LES DEPENDANCES DU BACKEND: aller dans le dossier vinoreact que vous avez cloné et exécuter: composer install && composer update
Excéuter: php artisan key:generate

INSTALLER LES DEPENDANCES DU FRONTEND: si votre version de npm est < 7, exécuter: npm install && npm run dev Pour connaitre votre version de npm: npm -v si votre version de npm est > 7, exécuter: npm install --legacy-peer-deps && npm run dev
dans un 1er terminal, run le backend: php artisan serve
dans un 2nd termianl, run le frontend: npm run dev

Le projet est live sur http://127.0.0.1:8000/

Le fichier racine de React est dans resources/js/index.js
Les composants React seront dans resources/js/components
