import test from 'node:test';
import assert from 'node:assert/strict';
import {employees, amount, balance, hours} from '../src/data.js';

test('calcula horas com adicional de 50% e 100%, arredondando em centavos',()=>{
  assert.equal(amount({base:2860,pay:1200,bonus:50}),390);
  assert.equal(amount({base:2860,pay:1200,bonus:100}),520);
  assert.equal(amount({base:2860,pay:1,bonus:50}),0.33);
  assert.equal(amount({base:2860,pay:0,bonus:50}),0);
});
test('saldo desconta débitos e horas são exibidas sem ambiguidade',()=>{
  assert.equal(balance({positive:1860,negative:240}),1620);
  assert.equal(hours(90),'1h30');
  assert.equal(hours(6000),'100h00');
  assert.equal(hours(0),'0h00');
});
test('a demonstração contém saldos válidos e os totais esperados',()=>{
  for(const e of employees) assert.ok(e.pay>=0&&e.pay<=balance(e));
  assert.equal(employees.reduce((s,e)=>s+amount(e),0),4036.5);
  assert.equal(employees.reduce((s,e)=>s+e.pay,0),10560);
});
