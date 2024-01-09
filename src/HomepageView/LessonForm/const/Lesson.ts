
export default interface IForm {
    fullName: string;
    email: string;
    fullNameParent: string;
    phoneNumber: string;
    languageType: LanguageType | null
    lessonType: LessonType | null,
    classType: ClassType | null

}

export enum LessonType {
    TRIAL = "Zajęcia próbne",
    NORMAL = "zajęcia normalne"
}

export enum LanguageType {
    SPANISH = "Hiszpański",
    ENGLISH = "Angielski"
}

export enum ClassType {
    VERY_LOW = "5 lat",
    LOW = "6 lat",
    MEDIUM = "klasa 1-3",
    HIGH = "klasa 4-5",
    VERY_HIGH = "klasa 6-7"
}
