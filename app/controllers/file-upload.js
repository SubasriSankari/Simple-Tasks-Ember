import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class FileUploadController extends Controller {

    @action
    dropHandler(event)
    {
        console.log("files dropped");
        event.preventDefault();
        
        if(event.dataTransfer.items){
            for(var ind = 0 ; ind < event.dataTransfer.items.length ; ind ++)
            {
                if(event.dataTransfer.items[ind].kind === 'file')
                {
                    var file = event.dataTransfer.items[ind].getAsFile();
                    console.log('... file[' + ind + '].name = ' + file.name);
                }
            }
        }
        else
        {
            for(var ind = 0 ; ind < event.dataTransfer.files.length ; ind ++ )
            {
                console.log('... file[' + ind + '].name = ' + event.dataTransfer.files[ind].name);
            }
        }
    }

    @action
    dragOverHandler(event)
    {
        console.log("File is in drop zone");
        event.preventDefault();
    }
    
}
