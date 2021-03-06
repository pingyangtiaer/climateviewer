/*
 var layerId = l.I,
 format = l.F,
 geoDataSrc = l.G,
 geoLayers = l.L,
 source = l.S,
 sourceUrl = l.U,
 zoom = l.Z,
 markerImg = l.MI,
 markerLabel = l.ML,
 markerScale = l.MS,
 markerMod = l.M,
 largeLayer = l.H,
 newLayer = l.NL,
 timeline = l.C,
 proxy = l.P;
 3D only = l.TRD,
 Leaflet only = l.TWD,
 no Features = l.X,
 no Marker List = l.Y;
 */
var layers = {
    I: 'ClimateViewer',
    Live: {
        N: "Layer Examples",
        Disasters: {
            N: "Disasters",
            icon: "fa-exclamation-circle",
            '>': [
                {
                    I: "ngdc_hazards",
                    T: 'arcgis-layer',
                    G: "http://maps.ngdc.noaa.gov/arcgis/rest/services/web_mercator/hazards/MapServer",
                    L: '0,1,2,3,4,5,6,7,8,9,10,11',
                    S: "Natural hazards such as earthquakes, tsunamis, and volcanoes affect both coastal and inland areas. Long-term data from these events can be used to establish the past record of natural hazard event occurrences, which is important for planning, response, and mitigation of future events. NOAA's National Centers for Environmental Information (NCEI) plays a major role in post-event data collection. The data in this archive is gathered from scientific and scholarly sources, regional and worldwide catalogs, tide gauge reports, individual event reports, and unpublished works.",
                    U: "http://ngdc.noaa.gov/hazard/hazards.shtml",
                    N: "[ARCGIS] Historic Disasters"
                }
            ]
        },
        Earthquake: {
            N: "Earthquake",
            icon: "fa-rss",
            '>': [
                {
                    I: "usgs-25-today",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "[GEOJSON] USGS - M2.5+ Earthquakes (Today)"
                },
                {
                    I: "usgs-all-today",
                    T: 'geojson',
                    ML: "usgs-eq",
                    MI: "/img/icons/earthquakes.png",
                    G: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
                    S: "United States Geological Society (USGS) Earthquake Hazards Program",
                    U: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
                    N: "[GEOJSON NO LIST] USGS - All Earthquakes (Today)",
                    Y: true
                }
            ]
        },
        Volcano: {
            N: "Volcano",
            icon: "fa-exclamation-triangle",
            '>': [
                {
                    I: "kml-volcano",
                    P: true,
                    MI: '/img/icons/volcano.png',
                    T: 'kml',
                    G: "http://www.volcano.si.edu/news/WeeklyVolcanoGE-Reports.kmz",
                    S: "Smithsonian Institute National Museum of History, Global Volcanism Program: Latest Volcanic Activity",
                    U: "http://www.volcano.si.edu/",
                    N: "[KML] Weekly Activity and Eruptions"
                },
            ]
        }
    },
    weather: {
        N: "Weather",
        radar: {
            N: "Weather Radar",
            icon: "fa-signal",
            '>': [
                {
                    X: true,
                    I: "mesonet-nexrad",
                    T: 'wms',
                    G: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi",
                    L: "nexrad_base_reflect",
                    S: "Iowa State University of Science and Technology MESONET",
                    U: "http://mesonet.agron.iastate.edu/ogc/",
                    N: "[WMS] NEXRAD Radar - Base Reflectivity"
                }
            ]
        }
    },
    satellites: {
        N: "Satellites",
        GIBScorrected: {
            N: "[NASA GIBS] Corrected Reflectance",
            icon: "fa-globe",
            '>': [
                {
                    I: "MODIS_Terra_CorrectedReflectance_TrueColor",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (True Color)"
                },
                {
                    I: "MODIS_Terra_CorrectedReflectance_Bands721",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (Bands 7-2-1)"
                },
                {
                    I: "MODIS_Terra_CorrectedReflectance_Bands367",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (Bands 3-6-7)"
                },
                {
                    I: "MODIS_Aqua_CorrectedReflectance_TrueColor",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (True Color)"
                },
                {
                    I: "MODIS_Aqua_CorrectedReflectance_Bands721",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (Bands 7-2-1)"
                },
                {
                    I: "VIIRS_SNPP_CorrectedReflectance_TrueColor",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "Visible Infrared Imaging Radiometer Suite (VIIRS) Suomi National Polar-orbiting Partnership (SNPP).<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2015/11/24 --> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "VIIRS SNPP (True Color)"
                },
                {
                    I: "VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "Visible Infrared Imaging Radiometer Suite (VIIRS) Suomi National Polar-orbiting Partnership (SNPP).<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2015/11/24 --> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "VIIRS SNPP (Bands M11-I2-I1)"
                },
                {
                    I: "VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "Visible Infrared Imaging Radiometer Suite (VIIRS) Suomi National Polar-orbiting Partnership (SNPP).<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2015/11/24 --> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "VIIRS SNPP (Bands M3-I3-M11)"
                }
            ]
        },
        GIBSland: {
            N: "[NASA GIBS] Land Surface Reflectance",
            icon: "fa-globe",
            '>': [
                {
                    I: "MODIS_Terra_SurfaceReflectance_Bands143",
                    T: 'nasa-gibs',
                    F: "jpg",
                    Fz: "8",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (True Color)"
                },
                {
                    I: "MODIS_Terra_SurfaceReflectance_Bands721",
                    T: 'nasa-gibs',
                    F: "jpg",
                    Fz: "8",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (Bands 7-2-1)"
                },
                {
                    I: "MODIS_Terra_SurfaceReflectance_Bands121",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (Bands 1-2-1)"
                },
                {
                    I: "MODIS_Aqua_SurfaceReflectance_Bands143",
                    T: 'nasa-gibs',
                    F: "jpg",
                    Fz: "8",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (True Color)"
                },
                {
                    I: "MODIS_Aqua_SurfaceReflectance_Bands721",
                    T: 'nasa-gibs',
                    F: "jpg",
                    Fz: "8",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (Bands 7-2-1)"
                },
                {
                    I: "MODIS_Aqua_SurfaceReflectance_Bands121",
                    T: 'nasa-gibs',
                    F: "jpg",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (Bands 1-2-1)"
                }
            ]
        },
        GIBSaerosol: {
            N: "[NASA GIBS] Aerosol Optical Depth",
            icon: "fa-globe",
            '>': [
                {
                    I: "MODIS_Terra_Aerosol",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra (Aerosol Optical Depth)"
                },
                {
                    I: "MODIS_Aqua_Aerosol",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua (Aerosol Optical Depth)"
                },
                {
                    I: "MODIS_Combined_Value_Added_AOD",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>/Aqua.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013-01-31 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Combined Value-Added Aerosol Optical Depth"
                },
                {
                    I: "OMI_Aerosol_Index",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "Ozone Monitoring Instrument (OMI) Aura.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "OMI Aura (Aerosol Index)"
                },
                {
                    I: "OMI_Aerosol_Optical_Depth",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "Ozone Monitoring Instrument (OMI) Aura.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "OMI Aura (Aerosol Optical Depth)"
                },
                {
                    I: "OMI_Absorbing_Aerosol_Optical_Depth",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "Ozone Monitoring Instrument (OMI) Aura.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "OMI Aura (Absorbing Aerosol Optical Depth)"
                }
            ]
        },
        GIBSbrighttemp: {
            N: "[NASA GIBS] Brightness Temperature",
            icon: "fa-globe",
            '>': [
                {
                    I: "MODIS_Terra_Brightness_Temp_Band31_Day",
                    T: 'nasa-gibs',
                    Fz: "7",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Brightness Temperature (Band 31, day)"
                },
                {
                    I: "MODIS_Terra_Brightness_Temp_Band31_Night",
                    T: 'nasa-gibs',
                    Fz: "7",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Brightness Temperature (Band 31, night)"
                },
                {
                    I: "MODIS_Aqua_Brightness_Temp_Band31_Day",
                    T: 'nasa-gibs',
                    Fz: "7",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a><br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua - Brightness Temperature (Band 31, day)"
                },
                {
                    I: "MODIS_Aqua_Brightness_Temp_Band31_Night",
                    T: 'nasa-gibs',
                    Fz: "7",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Aqua - Brightness Temperature (Band 31, night)"
                },
                {
                    I: "MLS_Temperature_46hPa_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://mls.jpl.nasa.gov/index-eos-mls.php'>Microwave Limb Sounder (MLS) Aura</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013/05/09 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MLS Aura - Temperature at 46 hPa (Day)"
                },
                {
                    I: "MLS_Temperature_46hPa_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://mls.jpl.nasa.gov/index-eos-mls.php'>Microwave Limb Sounder (MLS) Aura</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013/05/09 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MLS Aura - Temperature at 46 hPa (Night)"
                },
                {
                    I: "AMSRE_Brightness_Temp_89H_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://nsidc.org/data/amsre'>Advanced Microwave Scanning Radiometer (AMSR-E) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2002/06/01 -> 2011/10/04.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AMSR-E Aqua - Brightness Temperature 89Ghz Horizontal (Day)"
                },
                {
                    I: "AMSRE_Brightness_Temp_89V_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://nsidc.org/data/amsre'>Advanced Microwave Scanning Radiometer (AMSR-E) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2002/06/01 -> 2011/10/04.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AMSR-E Aqua - Brightness Temperature 89Ghz Vertical (Day)"
                },
                {
                    I: "AMSRE_Brightness_Temp_89H_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://nsidc.org/data/amsre'>Advanced Microwave Scanning Radiometer (AMSR-E) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2002/06/01 -> 2011/10/04.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AMSR-E Aqua - Brightness Temperature 89Ghz Horizontal (Night)"
                },
                {
                    I: "AMSRE_Brightness_Temp_89V_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://nsidc.org/data/amsre'>Advanced Microwave Scanning Radiometer (AMSR-E) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2002/06/01 -> 2011/10/04.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AMSR-E Aqua - Brightness Temperature 89Ghz Vertical (Night)"
                },
                {
                    I: "GMI_Brightness_Temp_Asc",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://pmm.nasa.gov/gpm/flight-project/gmi'>Global Precipitation Measurement (GPM) Microwave Imager (GMI)</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2014/10/11 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "GPM GMI - Brightness Temperature (Ascending)"
                },
                {
                    I: "GMI_Brightness_Temp_Dsc",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='https://pmm.nasa.gov/gpm/flight-project/gmi'>Global Precipitation Measurement (GPM) Microwave Imager (GMI)</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2014/10/11 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "GPM GMI - Brightness Temperature (Descending)"
                }
            ]
        },
        GIBSco: {
            N: "[NASA GIBS] Carbon Monoxide",
            icon: "fa-globe",
            '>': [
                {
                    I: "MLS_CO_215hPa_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://mls.jpl.nasa.gov/index-eos-mls.php'>Microwave Limb Sounder (MLS) Aura</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013/05/09 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MLS Aura - Carbon Monoxide (CO) at 215 hPa (Day)"
                },
                {
                    I: "MLS_CO_215hPa_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://mls.jpl.nasa.gov/index-eos-mls.php'>Microwave Limb Sounder (MLS) Aura</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013/05/09 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MLS Aura - Carbon Monoxide (CO) at 215 hPa (Night)"
                },
                {
                    I: "AIRS_CO_Total_Column_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://airs.jpl.nasa.gov/mission_and_instrument/instrument'>Atmospheric Infrared Sounder (AIRS) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013-05-08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AIRS Aqua - Carbon Monoxide (CO) Total Column (Day)"
                },
                {
                    I: "AIRS_CO_Total_Column_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://airs.jpl.nasa.gov/mission_and_instrument/instrument'>Atmospheric Infrared Sounder (AIRS) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2013-05-08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AIRS Aqua - Carbon Monoxide (CO) Total Column (Night)"
                }
            ]
        },
        GIBScttemp: {
            N: "[NASA GIBS] Cloud Top Temperature",
            icon: "fa-globe",
            '>': [
                {
                    I: "MODIS_Terra_Cloud_Top_Temp_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Cloud Top Temperature (day)"
                },
                {
                    I: "MODIS_Terra_Cloud_Top_Temp_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Cloud Top Temperature (night)"
                },
                {
                    I: "MODIS_Aqua_Cloud_Top_Temp_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Cloud Top Temperature (day)"
                },
                {
                    I: "MODIS_Aqua_Cloud_Top_Temp_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://modis.gsfc.nasa.gov/about/specifications.php'>Moderate Resolution Imaging Spectroradiometer (MODIS) Terra</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "MODIS Terra - Cloud Top Temperature (night)"
                },
                {
                    I: "OMI_Cloud_Pressure",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "Ozone Monitoring Instrument (OMI) Aura.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2012/05/08 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "OMI Aura - Cloud Pressure"
                }
            ]
        },
        GIBSdust: {
            N: "[NASA GIBS] Dust Score",
            icon: "fa-globe",
            '>': [
                {
                    I: "AIRS_Dust_Score_Ocean_Day",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://airs.jpl.nasa.gov/mission_and_instrument/instrument'>Atmospheric Infrared Sounder (AIRS) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2016/01/28 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AIRS Aqua - Dust Score (Day)"
                },
                {
                    I: "AIRS_Dust_Score_Ocean_Night",
                    T: 'nasa-gibs',
                    Fz: "6",
                    S: "<a href='http://airs.jpl.nasa.gov/mission_and_instrument/instrument'>Atmospheric Infrared Sounder (AIRS) Aqua</a>.<br>NASA Earth Observing System Data and Information System (EOSDIS) Global Imagery Browse Service (GIBS).<br>Available Imagery: 2016/01/28 -> Present.",
                    U: "https://earthdata.nasa.gov/",
                    N: "AIRS Aqua - Dust Score (Night)"
                }
            ]
        },
        satAnimation: {
            N: "Satellite Animations",
            icon: "fa-film",
            '>': [
                {
                    P: true,
                    C: true,
                    I: "sat15",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.natl.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "[KML ANIMATION] North Atlantic - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat16",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.epac.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "[KML ANIMATION] North East Pacific - Total Precipitable Water"
                },
                {
                    P: true,
                    C: true,
                    I: "sat17",
                    T: 'kml',
                    G: "http://tropic.ssec.wisc.edu/real-time/tpw/TPW.wpac.kml",
                    S: "CIMSS/SSEC University of Wisconsin-Madison",
                    U: "http://tropic.ssec.wisc.edu/",
                    N: "[KML ANIMATION] North West Pacific - Total Precipitable Water"
                }
            ]
        }
    }
};

