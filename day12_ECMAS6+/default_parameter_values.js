
// dung cho nhung tham so khong bat buoc truyen vao

const logger = (log = 'Gia tri mac dinh!', isAlert = false, type='log') => {
    // if (log == 'undefined') {
    //     log = 'Hello World!';
    // }  // khong can kiem tra undefined gan thang vao parameter
    if (isAlert) {
        return alert(log);
    }
    console[type](log);
}

logger('Message...', true);
logger('Message...', false, 'warn');