/** src/helpers/FileDisplayHelper.js */

import React from 'react';
import SvgDocDocx from '../components/svg/icons/SvgDocDocx';
import SvgDocGeneric from '../components/svg/icons/SvgDocGeneric';
import SvgDocPdf from '../components/svg/icons/SvgDocPdf';
import SvgDocXlsx from '../components/svg/icons/SvgDocXlsx';

class FileDisplayHelper {
    static getSvgIcon(fileType) {
        switch(fileType.toUpperCase()) {
            case 'PDF':
                return (
                    <SvgDocPdf/>
                );
            case 'DOCX':
                return (
                    <SvgDocDocx/>
                );
            case 'XLSX':
                return (
                    <SvgDocXlsx/>
                );
            default:
                return (
                    <SvgDocGeneric/>
                );
        }
    }

    static getFileDescription(type){
        let descriptions = {
            CMS: {
                link: `https://www.mass.gov/service-details/public-water-supplier-document-search-information`,
                description: `The Compliance Monitoring Schedule details the monitoring requirements of the PWS for the current 9-year compliance cycle.`
            },
            LCR: {
                link: `https://www.mass.gov/service-details/public-water-supplier-document-search-information`,
                description: `The Lead and Copper Rule (LCR) Approved Sampling Sites Plan lists all approved primary and alternate sampling locations for lead and copper.`
            },
            CCR: {
                link: `https://www.mass.gov/service-details/public-water-supplier-document-search-information`,
                description: `This report provides information on how your system complies with the drinking water contaminant monitoring requirements during the reporting year.`
            },
            CERT: {
                link: `https://www.mass.gov/service-details/public-water-supplier-document-search-information`,
                description: `This Certificate indicates that the system is registered with the state of Massachusetts and must comply with 310 CMR 22.00.`
            },
            SLI: {
                link: `https://www.mass.gov/service-details/public-water-supplier-document-search-information`,
                description: `Description for Service Line Inventory Goes Here...`
            }
        };

        return descriptions[type.toUpperCase()];
    }
}

export default FileDisplayHelper;