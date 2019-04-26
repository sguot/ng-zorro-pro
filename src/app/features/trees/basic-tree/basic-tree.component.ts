import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'pro-basic-tree',
  templateUrl: './basic-tree.component.html',
  styleUrls: ['./basic-tree.component.less']
})
export class BasicTreeComponent implements OnInit, OnDestroy {

  nodes = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            {title: '0-0-0-0', key: '0-0-0-0', isLeaf: true},
            {title: '0-0-0-1', key: '0-0-0-1', isLeaf: true},
            {title: '0-0-0-2', key: '0-0-0-2', isLeaf: true}
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            {title: '0-0-1-0', key: '0-0-1-0', isLeaf: true},
            {title: '0-0-1-1', key: '0-0-1-1', isLeaf: true},
            {title: '0-0-1-2', key: '0-0-1-2', isLeaf: true}
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        {title: '0-1-0-0', key: '0-1-0-0', isLeaf: true},
        {title: '0-1-0-1', key: '0-1-0-1', isLeaf: true},
        {title: '0-1-0-2', key: '0-1-0-2', isLeaf: true}
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  constructor() {
    console.log('tree constructor');
  }

  ngOnInit() {
    console.log('tree ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('tree ngOnDestroy');
  }
}
