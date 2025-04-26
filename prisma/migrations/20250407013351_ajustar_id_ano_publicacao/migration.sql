-- AlterTable
CREATE SEQUENCE anopublicacao_id_seq;
ALTER TABLE "AnoPublicacao" ALTER COLUMN "id" SET DEFAULT nextval('anopublicacao_id_seq');
ALTER SEQUENCE anopublicacao_id_seq OWNED BY "AnoPublicacao"."id";
