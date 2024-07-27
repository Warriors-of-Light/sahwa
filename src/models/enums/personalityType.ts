export enum PersonalityType {
    ISTJ = "ISTJ",
    ISFJ = "ISFJ",
    INFJ = "INFJ",
    INTJ = "INTJ",
    ISTP = "ISTP",
    ISFP = "ISFP",
    INFP = "INFP",
    INTP = "INTP",
    ESTP = "ESTP",
    ESFP = "ESFP",
    ENFP = "ENFP",
    ENTP = "ENTP",
    ESTJ = "ESTJ",
    ESFJ = "ESFJ",
    ENFJ = "ENFJ",
    ENTJ = "ENTJ",
}

export const personalityTypes: { [key in PersonalityType]: string } = {} as { [key in PersonalityType]: string };

Object.values(PersonalityType).forEach(type => {
    personalityTypes[type] = type;
});

export function getPersonalityTypeName(type: PersonalityType): string {
    return personalityTypes[type];
}