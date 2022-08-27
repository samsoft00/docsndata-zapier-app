"use strict";
/**
 * Model property schema
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODEL_PROPERTY_SCHEMA = void 0;
exports.MODEL_PROPERTY_SCHEMA = [
    { key: 'id', label: 'User ID' },
    { key: 'first_name', label: 'First Name', type: 'string', required: true },
    { key: 'last_name', label: 'Last Name', type: 'string', required: true },
    { key: 'number', label: 'Phone number', type: 'string', required: true },
    { key: 'email', label: 'Email address', type: 'string', required: true },
    { key: 'gender', label: 'Gender', type: 'string', required: true },
    { key: 'address', label: 'Address', type: 'string' },
    { key: 'city', label: 'City', type: 'string', required: true },
    { key: 'country', label: 'Country', type: 'string', required: true },
    { key: 'created_at', label: 'Created Date', type: 'string', required: true },
    { key: 'updated_at', label: 'Updated Date', type: 'string' },
];
