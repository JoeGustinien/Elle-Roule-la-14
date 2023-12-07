// Informations d'ouverture de la ligne de métro
const metroSchedule = {
    // Fermeture tous les lundis, mardis, mercredis et jeudis soir à partir de 22h jusqu'au 28 mars 2024
    "2023-12-25": "ouverte toute la journée", // Exception pour le 25 décembre 2023
    "2024-01-01": "ouverte toute la journée", // Exception pour le 1er janvier 2024

    //decembre
    "2023-12-04": "ouverte mais elle ferme à 22h",
    "2023-12-05": "ouverte mais elle ferme à 22h",
    "2023-12-06": "ouverte mais elle ferme à 22h",
    "2023-12-07": "ouverte mais elle ferme à 22h",
    "2023-12-08": "ouverte toute la journée",
    "2023-12-09": "ouverte toute la journée",
    "2023-12-10": "ouverte toute la journée",
    "2023-12-11": "ouverte mais elle ferme à 22h",
    "2023-12-12": "ouverte mais elle ferme à 22h",
    "2023-12-13": "ouverte mais elle ferme à 22h",
    "2023-12-14": "ouverte mais elle ferme à 22h",
    "2023-12-15": "ouverte toute la journée",
    "2023-12-16": "ouverte toute la journée",
    "2023-12-17": "ouverte toute la journée",
    "2023-12-18": "ouverte mais elle ferme à 22h",
    "2023-12-19": "ouverte mais elle ferme à 22h",
    "2023-12-20": "ouverte mais elle ferme à 22h",
    "2023-12-21": "ouverte mais elle ferme à 22h",
    "2023-12-22": "ouverte toute la journée",
    "2023-12-23": "ouverte toute la journée",
    "2023-12-24": "ouverte toute la journée",
    "2023-12-25": "ouverte toute la journée",
    "2023-12-26": "ouverte mais elle ferme à 22h",
    "2023-12-27": "ouverte mais elle ferme à 22h",
    "2023-12-28": "ouverte mais elle ferme à 22h",
    "2023-12-29": "ouverte toute la journée",
    "2023-12-30": "ouverte toute la journée",
    "2023-12-31": "ouverte toute la journée",
   
    // janvier 
    "2024-01-01": "ouverte toute la journée",
    "2024-01-02": "ouverte mais elle ferme à 22h",
    "2024-01-03": "ouverte mais elle ferme à 22h",
    "2024-01-04": "ouverte mais elle ferme à 22h",
    "2024-01-05": "ouverte toute la journée",
    "2024-01-06": "ouverte toute la journée",
    "2024-01-07": "ouverte toute la journée",
    "2024-01-08": "ouverte mais elle ferme à 22h",
    "2024-01-09": "ouverte mais elle ferme à 22h",
    "2024-01-10": "ouverte mais elle ferme à 22h",
    "2024-01-11": "ouverte mais elle ferme à 22h",
    "2024-01-12": "ouverte toute la journée",
    "2024-01-13": "fermée toute la journée",
    "2024-01-14": "fermée toute la journée",
    "2024-01-15": "ouverte mais elle ferme à 22h",
    "2024-01-16": "ouverte mais elle ferme à 22h",
    "2024-01-17": "ouverte mais elle ferme à 22h",
    "2024-01-18": "ouverte mais elle ferme à 22h",
    "2024-01-19": "ouverte toute la journée",
    "2024-01-20": "fermée toute la journée",
    "2024-01-21": "fermée toute la journée",
    "2024-01-22": "ouverte mais elle ferme à 22h",
    "2024-01-23": "ouverte mais elle ferme à 22h",
    "2024-01-24": "ouverte mais elle ferme à 22h",
    "2024-01-25": "ouverte mais elle ferme à 22h",
    "2024-01-26": "ouverte toute la journée",
    "2024-01-27": "fermée toute la journée",
    "2024-01-28": "fermée toute la journée",
    "2024-01-29": "ouverte mais elle ferme à 22h",
    "2024-01-30": "ouverte mais elle ferme à 22h",
    "2024-01-31": "ouverte mais elle ferme à 22h",



    // fevrier
    "2024-02-01": "ouverte mais elle ferme à 22h",
    "2024-02-02": "ouverte toute la journée",
    "2024-02-03": "fermée toute la journée",
    "2024-02-04": "fermée toute la journée",
    "2024-02-11": "fermée toute la journée",
    "2024-02-12": "fermée toute la journée",
    "2024-02-13": "fermée toute la journée",
    "2024-02-14": "fermée toute la journée",
    "2024-02-15": "fermée toute la journée",
    "2024-02-16": "fermée toute la journée",
    "2024-02-17": "fermée toute la journée",
    "2024-02-18": "fermée toute la journée",
    "2024-02-19": "fermée toute la journée",
    "2024-02-20": "fermée toute la journée",
    "2024-02-21": "fermée toute la journée",
    "2024-02-22": "fermée toute la journée",
    "2024-02-23": "fermée toute la journée",
    "2024-02-24": "fermée toute la journée",
    "2024-02-25": "fermée toute la journée",
    "2024-02-26": "ouverte mais elle ferme à 22h",
    "2024-02-27": "ouverte mais elle ferme à 22h",
    "2024-02-28": "ouverte mais elle ferme à 22h",
    "2024-02-29": "ouverte mais elle ferme à 22h",

    // mars
    "2024-03-01": "ouverte toute la journée",
    "2024-03-02": "fermée toute la journée",
    "2024-03-03": "fermée toute la journée",
    "2024-03-04": "ouverte mais elle ferme à 22h",
    "2024-03-05": "ouverte mais elle ferme à 22h",
    "2024-03-06": "ouverte mais elle ferme à 22h",
    "2024-03-07": "ouverte mais elle ferme à 22h",
    "2024-03-08": "ouverte toute la journée",
    "2024-03-09": "fermée toute la journée",
    "2024-03-10": "fermée toute la journée",
    "2024-03-11": "ouverte mais elle ferme à 22h",
    "2024-03-12": "ouverte mais elle ferme à 22h",
    "2024-03-13": "ouverte mais elle ferme à 22h",
    "2024-03-14": "ouverte mais elle ferme à 22h",
    "2024-03-15": "ouverte toute la journée",
    "2024-03-16": "fermée toute la journée",
    "2024-03-17": "fermée toute la journée",
    "2024-03-18": "ouverte mais elle ferme à 22h",
    "2024-03-19": "ouverte mais elle ferme à 22h",
    "2024-03-20": "ouverte mais elle ferme à 22h",
    "2024-03-21": "ouverte mais elle ferme à 22h",
    "2024-03-22": "ouverte toute la journée",
    "2024-03-23": "fermée toute la journée",
    "2024-03-24": "fermée toute la journée",
    "2024-03-25": "ouverte mais elle ferme à 22h",
    "2024-03-26": "ouverte mais elle ferme à 22h",
    "2024-03-27": "ouverte mais elle ferme à 22h",
    "2024-03-28": "ouverte mais elle ferme à 22h",
    "2024-03-29": "ouverte toute la journée",
    "2024-03-30": "fermée toute la journée",
    "2024-03-31": "fermée toute la journée",


    //avril
    "2024-04-01": "fermée toute la journée",
};

function verifierOuverture() {
    const dateInput = document.getElementById("dateInput").value;
    const dateISO = new Date(dateInput).toISOString().split("T")[0];
    const statut = metroSchedule[dateISO];

    if (dateISO > "2024-04-01") {
        const resultatElement = document.getElementById("resultat");
        resultatElement.innerHTML = "Les informations pour cette date ne sont pas disponibles pour le moment.";
        return;
    }

    const resultatElement = document.getElementById("resultat");

    if (statut !== undefined) {
        resultatElement.innerHTML = `La ligne 14 est ${statut} à cette date.`;
    } else {
        resultatElement.innerHTML = "La ligne 14 est fermée à cette date.";
    }
}

// Fonction pour vérifier l'état d'ouverture à la date du jour
function verifierOuvertureAujourdhui() {
    const dateAujourdhui = new Date();
    const dateISO = dateAujourdhui.toISOString().split("T")[0];
    const statut = metroSchedule[dateISO];

    const resultatAujourdhuiElement = document.getElementById("resultatAujourdhui");

    if (statut !== undefined) {
        resultatAujourdhuiElement.innerHTML = `La ligne 14 est ${statut} aujourd'hui.`;
    } else {
        resultatAujourdhuiElement.innerHTML = "La ligne 14 est fermée aujourd'hui.";
    }
}

// Appeler la fonction pour vérifier l'ouverture à la date du jour lors du chargement de la page
verifierOuvertureAujourdhui();