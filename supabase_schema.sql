
create table scores (
 id uuid primary key default uuid_generate_v4(),
 user_id uuid,
 score integer,
 created_at timestamp default now()
);

create table charities (
 id uuid primary key default uuid_generate_v4(),
 name text,
 description text
);

create table draws (
 id uuid primary key default uuid_generate_v4(),
 numbers integer[],
 created_at timestamp default now()
);
