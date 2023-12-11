/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer("zoneOffice").subscribe(() => {
        WA.room.hideLayer("Roof/roofOpenOffice");
        WA.room.hideLayer("Roof/roofOpenOffice2");
    });
    WA.room.onLeaveLayer("zoneOffice").subscribe(() => {
        WA.room.showLayer("Roof/roofOpenOffice");
        WA.room.showLayer("Roof/roofOpenOffice2");
    });

    WA.room.area.onEnter("roofZoneWorkShop").subscribe(() => {
        WA.room.hideLayer("Roof/roofWorkshop");
    });
    WA.room.area.onLeave("roofZoneWorkShop").subscribe(() => {
        WA.room.showLayer("Roof/roofWorkshop");
    });

    WA.room.area.onEnter("roofZoneAuditorium").subscribe(() => {
        WA.room.hideLayer("Roof/roofAuditorium");
        WA.room.hideLayer("Roof/roofAuditorium2");
    });
    WA.room.area.onLeave("roofZoneAuditorium").subscribe(() => {
        WA.room.showLayer("Roof/roofAuditorium");
        WA.room.showLayer("Roof/roofAuditorium2");
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
