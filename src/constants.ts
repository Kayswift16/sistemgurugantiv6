import { Teacher, ScheduleEntry } from './types';

export const TEACHERS: Teacher[] = [
  { id: 'MJ', name: 'Moktar bin Jaman' },
  { id: 'KV', name: 'Kenny Voo Kai Lin' },
  { id: 'MN', name: 'Muhd Nazmi bin Rosli' },
  { id: 'MA', name: 'Mohamad Ali bin Kaling' },
  { id: 'BB', name: 'Baby Trucy Sedrek' },
  { id: 'FS', name: 'Florida Engillia Sim' },
  { id: 'SD', name: 'Surayadi binti Drahman' },
  { id: 'JL', name: 'Jessy Lessy' },
  { id: 'NS', name: 'Nur Syafiqah binti Roslan' },
  { id: 'IM', name: 'Idrus bin Matjisin' },
  { id: 'NZ', name: 'Mohd Nazrin bin Ibrahim' },
  { id: 'AY', name: 'Amy Syahida binti Ahbasah' },
];

const timeSlots = [
    "0720-0750", "0750-0820", "0820-0850", "0850-0920", "0920-0950", 
    "1010-1040", "1040-1110", "1110-1140", "1140-1210", "1210-1240"
];

const rawData = {
    ISNIN: {
    "TAHUN 1": ["BM/NS","BM/NS","PK/NZ","BI/FS","BI/FS","PM/AY","PM/AY","MT/SD","MT/SD",""],
    "TAHUN 2": ["BM/JL","BM/JL","BM/JL","MT/KV","MT/KV","PM/MN","PM/MN","BI/FS","BI/FS","",""],
    "TAHUN 3": ["SN/KV","SN/KV","BI/BB","BI/BB","MT/NS","PM/SD","PM/SD","BM/JL","BM/JL","",""],
    "TAHUN 4": ["BI/MN","BI/MN","MT/IM","SN/AY","SN/AY","BM/NS","BM/NS","PK/NZ","PS/BB","PS/BB",""],
    "TAHUN 5": ["BI/FS","BI/FS","MT/SD","BM/NZ","BM/NZ","SN/JL","PM/BB","PM/BB","RBT/AY","RBT/AY",""],
    "TAHUN 6": ["BI/BB","SEJ/AY","SEJ/AY","MT/IM","MT/IM","BM/NZ","BM/NZ","MZ/IM","SN/MA","SN/MA",""],
  },
  SELASA: {
    "TAHUN 1": ["PH","BM/NS","BM/NS","BI/FS","BI/FS","MT/SD","MT/SD","PS/NS","PS/NS",""],
    "TAHUN 2": ["PH","BM/JL","BM/JL","PM/MN","PM/MN","MT/KV","MT/KV","BI/FS","BI/FS",""],
    "TAHUN 3": ["PH","BI/BB","BI/BB","PK/NZ","BM/JL","BM/JL","BM/JL","PS/SD","PS/SD",""],
    "TAHUN 4": ["PH","MT/IM","MT/IM","RBT/AY","RBT/AY","BM/NS","BM/NS","SN/AY","BI/MN","BI/MN",""],
    "TAHUN 5": ["PH","BI/FS","BI/FS","MT/SD","MT/SD","SEJ/AY","SEJ/AY","BM/NZ","PM/BB","PM/BB",""],
    "TAHUN 6": ["PH","BM/NZ","BM/NZ","MT/IM","MT/IM","PK/MA","BI/BB","BI/BB","SN/MA","SN/MA",""],
  },
  RABU: {
    "TAHUN 1": ["BI/FS","BI/FS","PM/AY","BM/NS","BM/NS","BM/NS","MZ/KV","PM/AY","PM/AY",""],
    "TAHUN 2": ["PM/MN","BM/JL","BM/JL","SN/MA","SN/MA","BI/FS","BI/FS","MT/KV","MT/KV",""],
    "TAHUN 3": ["MT/NS","MT/NS","PM/SD","BI/BB","BI/BB","BM/JL","BM/JL","PM/SD","PM/SD","",""],
    "TAHUN 4": ["PJ/NZ","PJ/NZ","BI/MN","SEJ/AY","SEJ/AY","PM/SD","PM/SD","BM/NS","BM/NS","MZ/KV",""],
    "TAHUN 5": ["PJ/MA","PJ/MA","PM/BB","BI/FS","BI/FS","MZ/AY","BM/NZ","BM/NZ","SN/JL","SN/JL",""],
    "TAHUN 6": ["PS/SD","PS/SD","BM/NZ","MT/IM","MT/IM","PM/MJ","PM/MJ","BI/BB","BI/BB","MT/IM",""],
  },
  KHAMIS: {
    "TAHUN 1": ["BM/NS","BM/NS","PJ/NZ","PJ/NZ","BI/FS","SN/AY","SN/AY","MT/SD","MT/SD"],
    "TAHUN 2": ["BI/FS","BI/FS","PJ/IM","PJ/IM","PK/AY","PS/FS","PS/FS","BM/JL","BM/JL"],
    "TAHUN 3": ["BM/JL","BM/JL","NZ/SD","SN/KV","SN/KV","BI/BB","BI/BB","MT/NS","MT/NS"],
    "TAHUN 4": ["BI/MN","BI/MN","SN/AY","SN/AY","BM/NS","PM/SD","MT/IM","MT/IM",""],
    "TAHUN 5": ["MT/SD","MT/SD","BI/FS","SN/JL","SN/JL","BM/NZ","BM/NZ","PS/AY","PS/AY"],
    "TAHUN 6": ["BI/BB","BI/BB","SN/MA","RBT/BB","RBT/BB","PM/MJ","PM/MJ","BM/NZ","BM/NZ",""],
  },
  JUMAAT: {
    "TAHUN 1": ["BI/FS","BI/FS","SN/AY","SN/AY","MT/SD","BM/NS","BM/NS","",""],
    "TAHUN 2": ["BM/JL","BM/JL","MT/KV","BI/FS","NZ/IM","SN/MA","SN/MA","",""],
    "TAHUN 3": ["BI/BB","PJ/NZ","PJ/NZ","MT/NS","MT/NS","BM/JL","BM/JL","",""],
    "TAHUN 4": ["BM/NS","BM/NS","PM/SD","BI/MN","BI/MN","MT/IM","MT/IM","",""],
    "TAHUN 5": ["MT/SD","MT/SD","PK/MA","BM/NZ","BM/NZ","BI/FS","BI/FS","",""],
    "TAHUN 6": ["PJ/MA","PJ/MA","PM/MJ","BI/BB","BI/BB","BM/NZ","BM/NZ","",""],
  },
};

export const TIMETABLE: ScheduleEntry[] = [];

Object.entries(rawData).forEach(([day, classes]) => {
    Object.entries(classes).forEach(([className, subjects]) => {
        subjects.forEach((subjectTeacher, index) => {
            if (subjectTeacher && subjectTeacher !== "PH" && subjectTeacher.includes('/')) {
                const [subject, teacherId] = subjectTeacher.split('/');
                TIMETABLE.push({
                    day,
                    time: timeSlots[index],
                    class: className,
                    subject,
                    teacherId: teacherId.trim()
                });
            } else if (subjectTeacher === "PM.SD") { // Handle typo from OCR
                 TIMETABLE.push({
                    day,
                    time: timeSlots[index],
                    class: className,
                    subject: "PM",
                    teacherId: "SD"
                });
            }
        });
    });
});
