# Configure .env with .env.example

# Install Modules
npm install

# Create Database and schema
---------------------------------------------------------------------------------------------------------------------

# Run Migration
node ace migration:run

# Rollback Migration
node ace migration:rollback

# Create Migration
Example: node ace make:migration users

---------------------------------------------------------------------------------------------------------------------

# Run Seed Indexado
node ace db:seed --files "./database/seeders/IndexSeeder.ts"

# Run Seed All
node ace db:seed

# Run Seed Singular
Example: node ace db:seed --files "./database/seeders/Example.ts"

# Create Seed
Example: node ace make:seeder User

---------------------------------------------------------------------------------------------------------------------

# Start
npm run dev

---

# Obs
Se estiver usando o DBeaver para conexão local ir até opções avançadas da conexão e ativar "Usar SSL"