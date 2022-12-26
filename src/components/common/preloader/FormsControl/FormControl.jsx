import style from './FormControl.module.css'



export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (<>
        <div className={hasError ? style.error_border : ''}>
            <Element {...input} {...props} />
        </div>
        <div className={style.error_span}>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>
    </>);
};

// export const Textarea = ({ input, meta, ...props }) => {
//     console.log(meta)
//     const hasError = meta.error && meta.touched
//     return (<>
//         <div className={hasError ? style.error_border : ''}>
//             <textarea {...input} {...props} />
//         </div>
//         <div className={style.error_span}>
//             {hasError ? <span>{meta.error}</span> : ''}
//         </div>
//     </>)
// }
// export const Inputarea = ({ input, meta, ...props }) => {
//     console.log(meta)
//     const hasError = meta.error && meta.touched
//     return (<>
//         <div className={hasError ? style.error_border : ''}>
//             <input {...input} {...props} />
//         </div>
//         <div className={style.error_span}>
//             {hasError ? <span>{meta.error}</span> : ''}
//         </div>
//     </>)
// }