import { describe, expect, test } from 'vitest';
import { MultipleCheck } from '../../../index';
import React from 'react';
import { setup } from '../../utils/testUtils';
import { screen } from '@testing-library/react';

const prefList = [{prefCode: 1, prefName: "北海道"}, {prefCode: 2, prefName: "青森県"}, {prefCode: 3, prefName: "岩手県"}];
const insertList = prefList.map((value) => ({id: value.prefCode.toString(), name: value.prefName}));
const title = 'タイトル';

describe('MultipleCheck テスト', () => {
    test('タイトルがpropsの通りに設定されている', async () => {
        setup(<MultipleCheck title={title} selectList={insertList}/>);
        const target = await screen.findByRole('heading', {level: 2});
        expect(target.innerHTML).toBe(title);
    });

    test('チェックボックスのリストがpropsで渡した数展開されている', async () => {
        setup(<MultipleCheck title={title} selectList={insertList}/>);
        const target = await screen.findAllByRole('checkbox');
        expect(target.length).toBe(3);
    });
});