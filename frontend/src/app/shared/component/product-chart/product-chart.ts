
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { AppConfigService } from '../../../core/services/data-chart/appConfigService';
import { ChartModule } from 'primeng/chart';
import { DesignerService } from '../../../core/services/data-chart/designer';
@Component({
  selector: 'app-product-chart',
  imports: [ChartModule],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './product-chart.html',
  styleUrl: './product-chart.css',
})
export class ProductChart implements OnInit {
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
            const borderColor = documentStyle.getPropertyValue('--color-border-chart');
            const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 400, 0); 
    gradient.addColorStop(0, 'oklch(47.916% 0.29872 276.072 / 0.29)');   
    gradient.addColorStop(1, 'oklch(68.114% 0.18739 293.861)');   
            this.data = {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر','ابان','اذر','دی','بهمن','اسفند'
                ],
                datasets: [
                    {
                        label: ' پرفروش ترین محصولات',
                        data: [65, 59, 80, 81, 56, 55, 40,50,80,40,24,44,51, 62, 33, 21, 62, 45],
                        backgroundColor: gradient,      
                        borderColor: borderColor, 
                        borderWidth: 1,
                        borderRadius: {
                        topLeft: 0,
                        topRight: 14,
                        bottomLeft: 0,
                        bottomRight: 14
                    },
                    borderSkipped: false}
                ]
            };

            this.options = {
                indexAxis: 'y',
                      barPercentage: 0.2,      
      categoryPercentage: 2.5,
                maintainAspectRatio: false,
                aspectRatio: 0.8,
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
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}
