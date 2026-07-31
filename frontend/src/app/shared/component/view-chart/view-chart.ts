import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect, ViewEncapsulation } from '@angular/core';
import { AppConfigService } from '../../../core/services/data-chart/appConfigService';
import { ChartModule } from 'primeng/chart';
import { DesignerService } from '../../../core/services/data-chart/designer';

@Component({
  selector: 'app-view-chart',
  imports: [ChartModule],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './view-chart.html',
  styleUrl: './view-chart.css',
})
export class ViewChart implements OnInit{
 data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--color-textColor');
            const textColorSecondary = documentStyle.getPropertyValue('--color-textColorSecondary');
            const surfaceBorder = documentStyle.getPropertyValue('--color-surfaceBorder');

            this.data = {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر','ابان','اذر','دی','بهمن','اسفند'],
                datasets: [

                    {
                        label: 'بازدید فروشگاه',
                        data: [12, 51, 62, 33, 21, 62, 45,51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--color-border-chart'),
                        tension: 0.4,
                        backgroundColor:documentStyle.getPropertyValue('--color-background-chart'),
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
            font: {
              size: 30,        
              weight: 900
            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}
