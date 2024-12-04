import { fakerID_ID as faker } from "@faker-js/faker";

export function generateIndonesianPhoneNumber() {
  const prefix = "628";
  const randomPhone = faker.string.numeric(9);
  return `${prefix}${randomPhone}`;
}

export function getProfessionalList() {
  const professionals = [
    {
      name: "Dr. Andi Wijaya",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/18.jpeg",
      city: faker.location.city(),
      specialist: "Psikolog",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Dra. Siti Rahmawati",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/24.jpeg",
      city: faker.location.city(),
      specialist: "Psikiater",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Budi Santoso, M.Psi",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/33.jpeg",
      city: faker.location.city(),
      specialist: "Konselor Kesehatan Mental",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Ika Purnama, M.Si",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/35.jpeg",
      city: faker.location.city(),
      specialist: "Terapis Perilaku",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Joko Pratama",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/51.jpeg",
      city: faker.location.city(),
      specialist: "Pekerja Sosial Klinis",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Lina Putri",
      avatar:
        "https://storage.googleapis.com/jaga-mental-photo-bucket/professional/31.jpeg",
      city: faker.location.city(),
      specialist: "Psikolog Anak",
      phone: generateIndonesianPhoneNumber(),
    },
  ];

  return professionals;
}
