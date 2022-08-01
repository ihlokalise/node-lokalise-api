import { BaseModel } from "./base_model";
import { UserGroup as UserGroupInterface } from "../interfaces/user_group";
export declare class UserGroup extends BaseModel implements UserGroupInterface {
    group_id: number;
    name: string;
    permissions: {
        is_admin: boolean;
        is_reviewer: boolean;
        admin_rights: string[];
        languages: Array<{
            lang_id: number;
            lang_iso: string;
            lang_name: string;
            is_writable: boolean;
        }>;
    };
    created_at: string;
    created_at_timestamp: number;
    team_id: number;
    projects: string[] | number[];
    members: number[] | string[];
}
