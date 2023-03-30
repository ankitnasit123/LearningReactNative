import React from "react";
import {  View} from "react-native";
class AuthorizationResponse {
    success: boolean;
    constructor({success}: {success: boolean}) {
    this.success = success;
    }
    serialize(): {success: boolean} {
    return {
    'success': this.success,
    };
    }
    };
    