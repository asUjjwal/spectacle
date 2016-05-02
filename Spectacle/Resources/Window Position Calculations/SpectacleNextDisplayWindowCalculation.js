windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleCenterWindowCalculation.centerWindowRectInVisibleFrameOfScreen(windowRect, visibleFrameOfDestinationScreen);
}, "SpectacleWindowActionNextDisplay");
