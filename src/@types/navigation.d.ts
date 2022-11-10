export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Welcome: undefined;
            Home: undefined;
            Details: { 
                id: string;
                name: string;
                reference: string;
                link: string;
                installationDate: string;
                lat: string;
                lon: string;
            };
            Favorites: undefined;
            Alerts: undefined;
            AlertsDetails: undefined;
        } 
    }
}