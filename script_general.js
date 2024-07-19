(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"isPanorama":TDV.Tour.Script.isPanorama,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlays":TDV.Tour.Script.getOverlays,"mixObject":TDV.Tour.Script.mixObject,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setValue":TDV.Tour.Script.setValue,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"init":TDV.Tour.Script.init,"existsKey":TDV.Tour.Script.existsKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showWindow":TDV.Tour.Script.showWindow,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"enableVR":TDV.Tour.Script.enableVR,"toggleVR":TDV.Tour.Script.toggleVR,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"disableVR":TDV.Tour.Script.disableVR,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getKey":TDV.Tour.Script.getKey,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"createTween":TDV.Tour.Script.createTween,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setLocale":TDV.Tour.Script.setLocale,"downloadFile":TDV.Tour.Script.downloadFile,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios},"children":["this.MainViewer"],"minHeight":0,"minWidth":0,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false},"name":"Player436","locales":{"ru":"locale/ru.txt"},"defaultLocale":"ru","history":{}},"hash": "55e1ff378a9815266bad3be5b8d97efba5f7d9fb3c302f19b5274f89aa683fe2", "definitions": [{"overlays":["this.overlay_DA348411_CB54_8E0D_41E6_BBCDD829C73F"],"hfovMin":"135%","label":trans('panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_t.jpg","cube":{"levels":[{"width":12288,"url":"media/panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"}}],"hfovMax":130,"id":"panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD","thumbnailUrl":"media/panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_t.jpg","vfov":180,"data":{"label":"Panorams_Gp7_r.0010"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_DA348411_CB54_8E0D_41E6_BBCDD829C73F"},"class":"AdjacentPanorama","select":"this.overlay_DA348411_CB54_8E0D_41E6_BBCDD829C73F.get('areas').forEach(function(a){ a.trigger('click') })","yaw":56.27,"distance":0.53,"backwardYaw":-142.5,"panorama":"this.panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E"}],"class":"Panorama","hfov":360},{"toolTipShadowColor":"#333138","toolTipPaddingTop":4,"subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"subtitlesBackgroundColor":"#000000","minWidth":100,"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"data":{"name":"Main Viewer"},"subtitlesGap":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"firstTransitionDuration":0,"propagateClick":false,"toolTipTextShadowColor":"#000000","playbackBarLeft":0,"progressBottom":10,"subtitlesFontSize":"3vmin","toolTipBorderColor":"#767676","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"progressHeight":2,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBorderSize":0,"progressRight":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"progressBarBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderSize":0,"toolTipFontColor":"#606060","progressOpacity":0.7,"toolTipFontFamily":"Arial","subtitlesTextShadowOpacity":1,"id":"MainViewer","playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarBorderSize":0,"toolTipPaddingRight":6,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","vrThumbstickRotationStep":20,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6,"progressBorderRadius":2,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"height":"100%","playbackBarRight":0,"progressLeft":"33%","vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"width":"100%"},{"items":[{"class":"PanoramaPlayListItem","media":"this.panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD","camera":"this.panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E","end":"this.trigger('tourEnded')","camera":"this.panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"class":"PanoramaCamera","id":"panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_camera","initialSequence":"this.sequence_C1C3B423_CB53_8E0D_4193_09063E6AC32D","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"overlays":["this.overlay_C42231F9_CB54_89FD_41DD_41533B42CAE8"],"hfovMin":"135%","label":trans('panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_t.jpg","cube":{"levels":[{"width":12288,"url":"media/panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"}}],"hfovMax":130,"id":"panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E","thumbnailUrl":"media/panorama_C0E1E73A_CB4C_8A7F_41B5_A9B530B8D70E_t.jpg","vfov":180,"data":{"label":"Panorams_Gp7_r.0011"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_C42231F9_CB54_89FD_41DD_41533B42CAE8"},"class":"AdjacentPanorama","select":"this.overlay_C42231F9_CB54_89FD_41DD_41533B42CAE8.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-142.5,"distance":1.67,"backwardYaw":56.27,"panorama":"this.panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD"}],"class":"Panorama","hfov":360},{"class":"PanoramaCamera","id":"panorama_C0D8FDE6_CB4C_FE17_41A4_05705ACB06CD_camera","initialSequence":"this.sequence_C1D5EC63_CB4C_9E0D_41E0_73DF8D8705A6","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"data":{"label":"Arrow 01a","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_DA3A5415_CB54_8E35_41C4_BD50EC5F5C2E"],"items":[{"pitch":-72.63,"vfov":5.73,"yaw":56.27,"distance":100,"image":"this.AnimatedImageResource_DBABBBF8_CB5C_99FB_41C2_9BF3788933D4","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5,"roll":19.93,"data":{"label":"Arrow 01a"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_DA348411_CB54_8E0D_41E6_BBCDD829C73F"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_C1C3B423_CB53_8E0D_4193_09063E6AC32D"},{"data":{"label":"Arrow 01a","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C4F26209_CB54_8A1D_41CE_C7D5395C42D9"],"items":[{"pitch":-45.49,"vfov":5.73,"yaw":-142.5,"distance":100,"image":"this.AnimatedImageResource_DBABFBF8_CB5C_99FB_41E7_F0AE7BC8C678","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5,"data":{"label":"Arrow 01a"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_C42231F9_CB54_89FD_41DD_41533B42CAE8"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_C1D5EC63_CB4C_9E0D_41E0_73DF8D8705A6"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_DA3A5415_CB54_8E35_41C4_BD50EC5F5C2E","mapColor":"any"},{"frameCount":9,"levels":[{"width":330,"url":"media/res_C48D7E0F_CB55_BA15_41AD_FD6FB2A94872_0.png","height":180,"class":"ImageResourceLevel"}],"colCount":3,"frameDuration":62,"class":"AnimatedImageResource","rowCount":3,"finalFrame":"first","id":"AnimatedImageResource_DBABBBF8_CB5C_99FB_41C2_9BF3788933D4"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_C4F26209_CB54_8A1D_41CE_C7D5395C42D9","mapColor":"any"},{"frameCount":9,"levels":[{"width":330,"url":"media/res_C48D7E0F_CB55_BA15_41AD_FD6FB2A94872_0.png","height":180,"class":"ImageResourceLevel"}],"colCount":3,"frameDuration":62,"class":"AnimatedImageResource","rowCount":3,"finalFrame":"first","id":"AnimatedImageResource_DBABFBF8_CB5C_99FB_41E7_F0AE7BC8C678"}],"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"gap":10,"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarMargin":2,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","height":"100%","class":"Player","width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Fri Jul 19 2024