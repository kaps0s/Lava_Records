PGDMP     (                	    y           users_DB    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    47812    users_DB    DATABASE     n   CREATE DATABASE "users_DB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "users_DB";
                postgres    false            ?            1259    47831 	   user_data    TABLE     \  CREATE TABLE public.user_data (
    id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    record_1 boolean DEFAULT false,
    record_2 boolean DEFAULT false,
    record_3 boolean DEFAULT false,
    record_4 boolean DEFAULT false,
    CONSTRAINT chk_username CHECK ((username <> 'null'::text))
);
    DROP TABLE public.user_data;
       public         heap    postgres    false            ?            1259    47829    user_data_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_data_id_seq;
       public          postgres    false    201            ?           0    0    user_data_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_data_id_seq OWNED BY public.user_data.id;
          public          postgres    false    200            #           2604    47834    user_data id    DEFAULT     l   ALTER TABLE ONLY public.user_data ALTER COLUMN id SET DEFAULT nextval('public.user_data_id_seq'::regclass);
 ;   ALTER TABLE public.user_data ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            ?          0    47831 	   user_data 
   TABLE DATA           j   COPY public.user_data (id, username, email, password, record_1, record_2, record_3, record_4) FROM stdin;
    public          postgres    false    201   ?       ?           0    0    user_data_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_data_id_seq', 28, true);
          public          postgres    false    200            *           2606    47843    user_data user_data_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_pkey;
       public            postgres    false    201            ?   !   x?32?,I-. B/9?"??\1z\\\ 
1?     