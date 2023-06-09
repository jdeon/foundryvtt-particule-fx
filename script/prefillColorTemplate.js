import { Vector3 } from "./utils.js"

export const defaultColorTemplate = () =>  {
    return {
        particuleColorStart: new Vector3('150_240', 250, '150_230'),
        particuleColorEnd: new Vector3(150, '35_150', 250)
    }
}

const fireColorTemplate = {
    particuleColorStart:new Vector3(250, 250, 50),
    particuleColorEnd:new Vector3(250, '50_100', 0),
}

const iceColorTemplate = {
    particuleColorStart:new Vector3('100_150', '200_225', 250),
    particuleColorEnd:new Vector3('150_220', '220_250', 250),
}

const deathColorTemplate = {
    particuleColorStart:new Vector3(0, 0, 0),
    particuleColorEnd:new Vector3('0_90', '0_40', '50_140'),
}

const lightColorTemplate = {
    particuleColorStart:new Vector3('250_255', '200_250', '0_200'),
    particuleColorEnd:new Vector3(255, 255, '220_255'),
}

const poisonColorTemplate = {
    particuleColorStart:new Vector3([75,'50_200'], '200_250', [75,'50_200']),
    particuleColorEnd:new Vector3('10_50', '50_100', '10_50'),
}

const silverColorTemplate = {
    particuleColorStart:[new Vector3(50,50,50),new Vector3(100,100,100),new Vector3(150,150,150),new Vector3(200,200,200)],
    particuleColorStart:[new Vector3(100,100,100),new Vector3(150,150,150),new Vector3(200,200,200),new Vector3(250,250,250)]
}

const cyberColorTemplate = {
    particuleColorStart: new Vector3(0,'200_255',0),
    particuleColorEnd: new Vector3(0,'175_225',0)
}

export const colorTemplateDictionnary = {
    fire : fireColorTemplate,
    ice: iceColorTemplate,
    death: deathColorTemplate,
    light: lightColorTemplate,
    poison: poisonColorTemplate,
    silver: silverColorTemplate,
    cyber: cyberColorTemplate
}