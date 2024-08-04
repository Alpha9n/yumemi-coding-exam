import { describe, expect, test } from 'vitest';
import { MultipleCheck } from '../../../index';
import React from 'react';
import { setup } from '../../utils/testUtils';
import { screen } from '@testing-library/react';

const checkBoxList = [{prefCode: 1, prefName: "北海道"}, {prefCode: 2, prefName: "青森県"}, {prefCode: 3, prefName: "岩手県"}];
const title = 'タイトル';

describe('MultipleCheck テスト', () => {
    test('タイトルがpropsの通りに設定されている', async () => {
        setup(<MultipleCheck title={title} selectList={checkBoxList}/>);
        const target = await screen.findByRole('heading', {level: 2});
        expect(target).toBe(title);
    });

    test('チェックボックスのリストがpropsで渡した数展開されている', async () => {
        setup(<MultipleCheck title={title} selectList={checkBoxList}/>);
        const target = await screen.findAllByRole('checkbox');
        expect(target.length).toBe(3);
    });
});