// Le modèle pour les informations de l'utilisateur prend les données brutes et renvoie un objet formaté.
const UserInfosModel = (data) => ({
    id: data.id || null, // Si "id" existe, il est utilisé, sinon, "null" est attribué.
    firstName: data.userInfos?.firstName || '', // Si "userInfos.firstName" existe, il est utilisé, sinon, une chaîne vide est attribuée.
    lastName: data.userInfos?.lastName || '', // Si "userInfos.lastName" existe, il est utilisé, sinon, une chaîne vide est attribuée.
    score: data.score || data.todayScore || 0, // Si "score" existe, il est utilisé, sinon, "todayScore" est utilisé, sinon, 0 est attribué.
    proteinCount: data.keyData?.proteinCount || 0, // Si "keyData.proteinCount" existe, il est utilisé, sinon, 0 est attribué.
    carbohydrateCount: data.keyData?.carbohydrateCount || 0, // Si "keyData.carbohydrateCount" existe, il est utilisé, sinon, 0 est attribué.
    lipidCount: data.keyData?.lipidCount || 0, // Si "keyData.lipidCount" existe, il est utilisé, sinon, 0 est attribué.
    calorieCount: data.keyData?.calorieCount || 0, // Si "keyData.calorieCount" existe, il est utilisé, sinon, 0 est attribué.
});

// Le modèle pour les données d'activité quotidienne prend les données brutes et renvoie un objet formaté.
const DailyActivitiesModel = (data) => ({
    sessions: data.map((session) => {
        const day = new Date(session.day); // Convertir la date "day" en objet Date.
        return {
            name: day.getDate(), // Utiliser le jour du mois comme "name".
            kg: session.kilogram || 0, // Si "kilogram" existe, il est utilisé, sinon, 0 est attribué.
            kcal: session.calories || 0, // Si "calories" existe, il est utilisé, sinon, 0 est attribué.
        };
    }),
});

// Le modèle pour les types d'activité prend les données brutes et renvoie un tableau d'objets formatés.
const ActivityTypesModel = (data) => {
    if (!data || !data.data) {
        return {};
    }

    const order = ["intensity", "speed", "strength", "endurance", "energy", "cardio"];

    const translation = {
        "intensity": "Intensité",
        "speed": "Vitesse",
        "strength": "Force",
        "endurance": "Endurance",
        "energy": "Énergie",
        "cardio": "Cardio",
    };

    const formatedActivities = data.data.map((activity) => {
        const subject = translation[data.kind[activity.kind]] || '';
        const A = activity.value || 0;
        return { subject, A };
    });

    formatedActivities.sort((a, b) => {
        const indexA = order.indexOf(a.subject);
        const indexB = order.indexOf(b.subject);
        return indexA - indexB;
    });
    return formatedActivities;
};

// Le modèle pour les sessions de temps prend les données brutes et renvoie un tableau d'objets formatés.
const SessionsTimeModel = (data) => {
    if (!data) {
        return {};
    }

    const dayNames = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D",
    };

    const formated = data.map((session) => {
        const day = dayNames[session.day] || '';
        const sessionLength = session.sessionLength || 0;
        return { day, sessionLength };
    });
    return formated;
};

// Exportez les modèles pour les utiliser ailleurs dans votre application.
export { UserInfosModel, DailyActivitiesModel, ActivityTypesModel, SessionsTimeModel };