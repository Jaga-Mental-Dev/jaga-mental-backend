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
      avatar: "https://i.pravatar.cc/300?img=18",
      city: faker.location.city(),
      specialist: "Psikolog",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Dra. Siti Rahmawati",
      avatar: "https://i.pravatar.cc/300?img=24",
      city: faker.location.city(),
      specialist: "Psikiater",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Budi Santoso, M.Psi",
      avatar: "https://i.pravatar.cc/300?img=33",
      city: faker.location.city(),
      specialist: "Konselor Kesehatan Mental",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Ika Purnama, M.Si",
      avatar: "https://i.pravatar.cc/300?img=35",
      city: faker.location.city(),
      specialist: "Terapis Perilaku",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Joko Pratama",
      avatar: "https://i.pravatar.cc/300?img=51",
      city: faker.location.city(),
      specialist: "Pekerja Sosial Klinis",
      phone: generateIndonesianPhoneNumber(),
    },
    {
      name: "Lina Putri",
      avatar: "https://i.pravatar.cc/300?img=31",
      city: faker.location.city(),
      specialist: "Psikolog Anak",
      phone: generateIndonesianPhoneNumber(),
    },
  ];

  return professionals;
}
