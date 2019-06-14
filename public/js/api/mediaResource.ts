/**
 * This class reads a media resource api configuration and sets up request format from it.
 */
export class MediaResource {
    
    QOD: {
        url: string;
        sub_url: {};
        params: []
    };

    getQOD(obj: Object){
        let QOD: Object
        let prop
        for(prop in obj){
            let descriptor = Object.getOwnPropertyDescriptor(obj, prop)
            Object.defineProperty(QOD, prop, descriptor)
        }
        return QOD
    }

    setParams(params){
        let newParams
        for(let key in params){
            if(key !== null && key !== ''){
                let descriptor = Object.getOwnPropertyDescriptor(params, key);
                Object.defineProperty(newParams, key, descriptor);
            }
            return newParams;
        }
    }

    addResources(...resources){
        let allResources
        for(let name in resources){
            // do something
        }
        return allResources
    }

    createRes(url: string, ...filters){
        let resource = {
            name: url + 'f',
            url: url,
            filters: filters
        }
        return resource
        
    }

    setFilter(filters: {}, resource){
        for(let key in filters){
            let value = filters[key]
            let d: string
            d= d + value
            resource.params = d
        }
        let param = this.pushObject(filters, resource);
        return param
    }

    pushObject(bigObj, smallObj){
        let obj: Object
        for(let key in bigObj){
            let des
            if(bigObj[key]){
                des = Object.getOwnPropertyDescriptor(bigObj, key)
                Object.defineProperty(obj, key, des)}
        }

        for(let key in smallObj){
            let des 
            if(smallObj[key]){
                des = Object.getOwnPropertyDescriptor(smallObj, key)
                Object.defineProperty(obj, key, des)}
        }
        return obj
    }
}