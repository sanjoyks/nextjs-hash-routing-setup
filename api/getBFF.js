function getBFF(aspath) {
    aspath = aspath||"";
    if (aspath.includes("landing")) {
        return Promise.resolve(landingPageJSON)
    }
    else if(aspath.includes("tv")){
        return Promise.resolve(tvPageJSON);
    }else if(aspath.includes("watch")){
        return watchPageJSON;
    }
    return watchPageJSON;
}


function getMenu() {
    return {}
}
const landingPageJSON = {
    success: true,
    data: {
        page: {
            page_type: 'landing',
            spaces: {
                trays: {
                    space_type: 'tray',
                    widgets: [
                        {
                            id: 'mh',
                            data: {
                                autoscroll: true,
                                autoscroll_duration: '3s'
                            },
                            widget_items: [
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'KKR vs MI',
                                        content_id: '1260063451',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Kolkata Knight Riders',
                                                logo: 'http://image.hotstar.com/kkr',
                                                short_name: 'KKR'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'CSK vs MI',
                                        content_id: '1260063452',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Chennai',
                                                logo: 'http://image.hotstar.com/csk',
                                                short_name: 'CSK'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_movie',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Avengers Endgame',
                                        isNewRelease: true,
                                        image: 'http://images.hotstar.com/avenger_endgame',
                                        addToWatchList: true,
                                        languages: ['english', 'hindi']
                                    }
                                },
                                {
                                    id: 'mh_movie_upcoming',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Future',
                                        addToWatchList: true,
                                        image: 'http://images.hotstar.com/future'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'sub_nudge_redzone',
                            data: {
                                remaining_days: 5
                            }
                        },
                        {
                            id: 'single_tray',
                            widget_items: [
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000001',
                                        title: 'arrya',
                                        image: '',
                                        remaining_percentage: '20'
                                    }
                                },
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000002',
                                        title: 'dil bechara',
                                        image: '',
                                        remaining_percentage: '50'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'ads_skinny_banner',
                            data: {
                                title: 'coca cola',
                                image: 'http://images.hotstar.com',
                                cta: 'http://cocacola.com'
                            }
                        },
                        {
                            id: 'recommended',
                            data: {
                                scrollable: true,
                                next_page: '/widget/items/recommended?ver=v1.0&items=2',
                                widget_items: [
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000001',
                                            title: 'arrya',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    },
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000002',
                                            title: 'dil bechara',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    next_page: '/v1/pages/{page_id}/spaces/{space_id}?offset=10'
                },
                sub_menu: {
                    space_type: 'sub-menu',
                    widgets: [
                        {
                            id: 'submenu_floating',
                            data: {
                                folded: true,
                                fold_count: 2,
                                menu_items: [
                                    {
                                        title: 'tv',
                                        nav: '/home?filter=tv&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'movie',
                                        nav: '/home?filter=movie&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'romance',
                                        nav: '/home?filter=romance&menu=false&submenu=false'
                                    }
                                ]
                            }
                        }
                    ]
                },
                menu: getMenu()
            }
        }
    }
};

const tvPageJSON = {
    success: true,
    data: {
        page: {
            page_type: 'tv',
            spaces: {
                trays: {
                    space_type: 'tray',
                    widgets: [
                        {
                            id: 'mh',
                            data: {
                                autoscroll: true,
                                autoscroll_duration: '3s'
                            },
                            widget_items: [
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'KKR vs MI',
                                        content_id: '1260063451',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Kolkata Knight Riders',
                                                logo: 'http://image.hotstar.com/kkr',
                                                short_name: 'KKR'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'CSK vs MI',
                                        content_id: '1260063452',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Chennai',
                                                logo: 'http://image.hotstar.com/csk',
                                                short_name: 'CSK'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_movie',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Avengers Endgame',
                                        isNewRelease: true,
                                        image: 'http://images.hotstar.com/avenger_endgame',
                                        addToWatchList: true,
                                        languages: ['english', 'hindi']
                                    }
                                },
                                {
                                    id: 'mh_movie_upcoming',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Future',
                                        addToWatchList: true,
                                        image: 'http://images.hotstar.com/future'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'sub_nudge_redzone',
                            data: {
                                remaining_days: 5
                            }
                        },
                        {
                            id: 'single_tray',
                            widget_items: [
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000001',
                                        title: 'arrya',
                                        image: '',
                                        remaining_percentage: '20'
                                    }
                                },
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000002',
                                        title: 'dil bechara',
                                        image: '',
                                        remaining_percentage: '50'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'ads_skinny_banner',
                            data: {
                                title: 'coca cola',
                                image: 'http://images.hotstar.com',
                                cta: 'http://cocacola.com'
                            }
                        },
                        {
                            id: 'recommended',
                            data: {
                                scrollable: true,
                                next_page: '/widget/items/recommended?ver=v1.0&items=2',
                                widget_items: [
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000001',
                                            title: 'arrya',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    },
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000002',
                                            title: 'dil bechara',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    next_page: '/v1/pages/{page_id}/spaces/{space_id}?offset=10'
                },
                sub_menu: {
                    space_type: 'sub-menu',
                    widgets: [
                        {
                            id: 'submenu_floating',
                            data: {
                                folded: true,
                                fold_count: 2,
                                menu_items: [
                                    {
                                        title: 'tv',
                                        nav: '/home?filter=tv&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'movie',
                                        nav: '/home?filter=movie&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'romance',
                                        nav: '/home?filter=romance&menu=false&submenu=false'
                                    }
                                ]
                            }
                        }
                    ]
                },
                menu: getMenu()
            }
        }
    }
};


const watchPageJSON = {
    success: true,
    data: {
        page: {
            page_type: 'watch',
            spaces: {
                trays: {
                    space_type: 'tray',
                    widgets: [
                        {
                            id: 'mh',
                            data: {
                                autoscroll: true,
                                autoscroll_duration: '3s'
                            },
                            widget_items: [
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'KKR vs MI',
                                        content_id: '1260063451',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Kolkata Knight Riders',
                                                logo: 'http://image.hotstar.com/kkr',
                                                short_name: 'KKR'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_live_cricket',
                                    data: {
                                        title: 'CSK vs MI',
                                        content_id: '1260063452',
                                        image: 'http://image.hotstar.com/kkr',
                                        teams: {
                                            team1: {
                                                name: 'Chennai',
                                                logo: 'http://image.hotstar.com/csk',
                                                short_name: 'CSK'
                                            },
                                            team2: {
                                                name: 'Mumbai Indians',
                                                logo: 'http://image.hotstar.com/mi',
                                                short_name: 'MI'
                                            }
                                        },
                                        isLive: true,
                                        score: {
                                            runs: '101',
                                            over: '10.2',
                                            refresh_interval: '30s',
                                            refresh_api: 'social_score_v1'
                                        },
                                        concurrency: {
                                            count: '25000000',
                                            refresh_interval: '10s',
                                            refresh_api: 'social_wazowski_v1'
                                        }
                                    }
                                },
                                {
                                    id: 'mh_movie',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Avengers Endgame',
                                        isNewRelease: true,
                                        image: 'http://images.hotstar.com/avenger_endgame',
                                        addToWatchList: true,
                                        languages: ['english', 'hindi']
                                    }
                                },
                                {
                                    id: 'mh_movie_upcoming',
                                    data: {
                                        content_id: '10000001',
                                        title: 'Future',
                                        addToWatchList: true,
                                        image: 'http://images.hotstar.com/future'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'sub_nudge_redzone',
                            data: {
                                remaining_days: 5
                            }
                        },
                        {
                            id: 'single_tray',
                            widget_items: [
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000001',
                                        title: 'arrya',
                                        image: '',
                                        remaining_percentage: '20'
                                    }
                                },
                                {
                                    id: 'cw_content',
                                    data: {
                                        content_id: '1000002',
                                        title: 'dil bechara',
                                        image: '',
                                        remaining_percentage: '50'
                                    }
                                }
                            ]
                        },
                        {
                            id: 'ads_skinny_banner',
                            data: {
                                title: 'coca cola',
                                image: 'http://images.hotstar.com',
                                cta: 'http://cocacola.com'
                            }
                        },
                        {
                            id: 'recommended',
                            data: {
                                scrollable: true,
                                next_page: '/widget/items/recommended?ver=v1.0&items=2',
                                widget_items: [
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000001',
                                            title: 'arrya',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    },
                                    {
                                        id: 'reco_content',
                                        data: {
                                            content_id: '1000002',
                                            title: 'dil bechara',
                                            image: '',
                                            add_to_watchlist: true
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    next_page: '/v1/pages/{page_id}/spaces/{space_id}?offset=10'
                },
                sub_menu: {
                    space_type: 'sub-menu',
                    widgets: [
                        {
                            id: 'submenu_floating',
                            data: {
                                folded: true,
                                fold_count: 2,
                                menu_items: [
                                    {
                                        title: 'tv',
                                        nav: '/home?filter=tv&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'movie',
                                        nav: '/home?filter=movie&menu=false&submenu=false'
                                    },
                                    {
                                        title: 'romance',
                                        nav: '/home?filter=romance&menu=false&submenu=false'
                                    }
                                ]
                            }
                        }
                    ]
                },
                menu: getMenu()
            }
        }
    }
};


export default getBFF;