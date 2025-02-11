docker build --no-cache -f SQL\Dockerfile.PostgreSql -t product_18034/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t product_18034/app ../..
