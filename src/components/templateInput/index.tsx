import React from 'react';
import {ErrorMessageBlock, TemplateInputBlock} from "./style";
import {Input} from "./style";
import {InputFormProps} from './types';

const TemplateInput = (props: InputFormProps) => {

    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (props.errorChange && props.validate) {

            props.errorChange(props.validate(e.target.value))
        }

    }

    return (
        <TemplateInputBlock>
            <Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                onBlur={validateValue}
                $error={props.error}>
            </Input>
            <ErrorMessageBlock>
                {props.error !== 'true' && <span>{props.error}</span>}
            </ErrorMessageBlock>

        </TemplateInputBlock>
    );
};

export default TemplateInput;