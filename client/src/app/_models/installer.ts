import { InstallerAvailable } from "./installerAvailable";

export interface Installer {
    id: number;
    username: string;
    logo?: any;
    email: string;
    phoneNumber?: any;
    installations?: any;
    available: InstallerAvailable[]; //any[]
}