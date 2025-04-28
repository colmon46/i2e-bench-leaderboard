document.addEventListener("DOMContentLoaded", function () {
    let combined = true;

    renderTable(combined);

    document.getElementById("btn_single").addEventListener("click", function () {
        combined = false;  
        renderTable(combined); 
    });

    document.getElementById("btn_combined").addEventListener("click", function () {
        combined = true;  
        renderTable(combined);  
    });

    function renderTable(isCombined) {
        let tableHtml = "";
        
        if (isCombined) {
            const combinedTableData = [
                { model: "InternVL2-4B", avg: 1.8, values: [7.2, 0.5, 4.5, 4.2, 1.4, 0.5, 0.9, 0.3, 1.8] },
                { model: "Qwen2-VL-7B", avg: 31.0, values: [51.3, 27.7, 49.1, 42.6, 53.8, 45.6, 48.7, 1.6, 31.0] },
                { model: "OmniParser", avg: 45.1, values: [78.5, 63.9, 79.7, 73.9, 54.3, 52.4, 53.1, 8.3, 45.1] },
                { model: "Seeclick", avg: 27.8, values: [66.1, 44.7, 54.5, 55.8, 37.1, 19.9, 26.4, 1.1, 27.8] },
                { model: "UGround-7B", avg: 48.3, values: [72.5, 75.7, 74.6, 74.1, 65.8, 47.1, 54.2, 16.5, 48.3] },
                { model: "ShowUI-2B", avg: 42.0, values: [84.6, 73.2, 69.9, 76.8, 51.3, 35.6, 41.5, 7.7, 42.0] },
                { model: "OS-Atlas-4B", avg: 39.4, values: [73.3, 73.4, 61.1, 70.1, 51.5, 39.9, 44.3, 3.7, 39.4] },
                { model: "OS-Atlas-7B", avg: 53.3, values: [83.8, 83.1, 79.7, 82.5, 63.2, 55.8, 58.6, 18.9, 53.3] },
                { model: "I2E-VLM-4B", avg: 45.3, values: [70.3, 70.9, 70.1, 70.4, 61.9, 48.3, 53.4, 12.2, 45.3] },
                { model: "I2E-VLM-7B", avg: 58.5, values: [86.5, 78.0, 82.6, 82.5, 72.0, 67.9, 69.5, 23.6, 58.5] },
                { model: "Uground-V1-2B", avg: 54.3, values: [81.5, 75.4, 79.1, 78.8, 72.9, 47.9, 57.4, 26.6, 54.3]},
                { model: "Uground-V1-7B", avg: 62.8, values: [87.0, 87.6, 86.5, 87.1, 81.3, 63.6, 70.3, 31.1, 62.8]},
                { model: "Uground-V1-72B", avg: 66.8, values: [89.2, 89.2, 91.0, 89.7, 84.5, 71.3, 76.3, 34.3, 66.8]},
                { model: "UI-TARS-2B", avg: 57.3, values: [85.0, 79.8, 81.4, 82.3, 74.1, 54.5, 62.0, 27.7, 57.3]},
                { model: "UI-TARS-7B", avg: 62.2, values: [90.3, 86.9, 91.6, 89.5, 71.4, 55.3, 61.4, 35.7, 62.2]},
                { model: "UI-TARS-72B", avg: 66.7, values: [89.2, 87.0, 89.2, 88.4, 80.9, 69.4, 73.7, 38.1, 66.7]},
                { model: "Aguvis-7B", avg: 40.4, values: [87.4, 82.1, 82.6, 84.4, 61.1, 48.4, 53.2, 22.9, 40.4]},
                { model: "Qwen2.5-VL-3B", avg: 41.3, values: ["-", "-", "-", 55.5, 51.4, 35.8, 41.7, 23.9, 41.3]},
                { model: "Qwen2.5-VL-7B", avg: 55.8, values: ["-", "-", "-", 84.7, 58.4, 51.0, 53.8, 29.0, 55.8]},
                { model: "Qwen2.5-VL-72B", avg: 60.7, values: ["-", "-", "-", 87.1, 49.6, 52.5, 51.4, 43.6, 60.7]},
                { model: "OmniParser-V2", avg: 55.5, values: [75.7, 66.3, 74.1, 72.0, 57.0, 53.5, 54.8, 39.6, 55.5]},
                { model: "InfiGUI-R1", avg: 62.3, values: [89.9, 85.0, 87.1, 87.5, 78.7, 64.2, 69.7, 29.6, 62.3]},
                { model: "UI-R1", avg: 51.6, values: ["-", 79.6, 77.2, 78.6, 67.9, 52.8, 58.5, 17.8, 51.6]}
            ];

            combinedTableData.sort((a, b) => b.avg - a.avg);

            tableHtml = `
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2">Model</th>
                            <th colspan="4">ScreenSpot</th>
                            <th colspan="3">I2E-Bench</th>
                            <th rowspan="2">ScreenSpot-Pro</th>
                            <th rowspan="2">Avg.*</th>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <th>Web</th>
                            <th>Desktop</th>
                            <th>Avg.</th>
                            <th>Explicit</th>
                            <th>Implicit</th>
                            <th>Avg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${combinedTableData.map(row => `
                            <tr>
                                <td>${row.model}</td>
                                ${row.values.map(value => `<td>${value}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="10" style="text-align:center;">Avg.* denotes the arithmetic mean of average accuracy across three benchmarks.</td>
                    </tr>
                    </tfoot>
                </table>
            `;
        } else {
            // Web	Desktop	Mobile Button Icon Dropdown Input Toggle Explicit Implicit
            const singleTableData = [
                { model: "OmniParser", avg: 53.1, values: [30.8, 45.5, 67.6, 68.4, 60.5, 65.9, 58.9, 26.9, 54.3, 52.4, 53.1] },
                { model: "Seeclick", avg: 26.4, values: [18.2, 15.8, 37.2, 31.6, 26.2, 22.5, 29.6, 22.1, 37.1, 19.9, 26.4] },
                { model: "Uground-7B", avg: 54.2, values: [53.0, 44.3, 61.8, 57.3, 49.7, 76.4, 64.2, 37.0, 65.8, 47.1, 54.2] },
                { model: "ShowUI-2B", avg: 41.5, values: [29.6, 30.4, 53.9, 52.0, 44.1, 51.1, 52.8, 18.9, 51.3, 35.6, 41.5] },
                { model: "OS-Atlas-4B", avg: 44.3, values: [54.6, 19.9, 58.6, 43.5, 44.1, 46.6, 46.3, 42.2, 51.5, 39.9, 44.3] },
                { model: "OS-Atlas-7B", avg: 58.6, values: [52.2, 48.9, 68.1, 69.1, 58.7, 80.3, 70.1, 32.3, 63.2, 55.8, 58.6] },
                { model: "I2E-VLM-4B", avg: 53.4, values: [60.9, 38.9, 61.4, 54.3, 50.0, 61.2, 68.6, 39.0, 61.9, 48.3, 53.4] },
                { model: "I2E-VLM-7B", avg: 69.5, values: [62.1, 64.0, 76.2, 77.0, 68.2, 84.8, 86.2, 44.4, 72.0, 67.9, 69.5] },
                { model: "Uground-V1-2B", avg: 57.4, values: [66.4, 49.5, 59.9, 57.6, 50.7, 82.0, 64.8, 44.7, 72.9, 47.9, 57.4]},
                { model: "Uground-V1-7B", avg: 70.3, values: [70.8, 65.7, 73.5, 72.9, 62.9, 83.7, 75.4, 63.5, 81.3, 63.6, 70.3]},
                { model: "Uground-V1-72B", avg: 76.3, values: [74.7, 74.6, 78.2, 79.6, 75.5, 93.3, 74.5, 68.7, 84.5, 71.3, 76.3]},
                { model: "UI-TARS-2B", avg: 62.0, values: [62.2, 54.0, 66.7, 59.1, 55.6, 82.6, 72.7, 50.1, 74.1, 54.5, 62.0]},
                { model: "UI-TARS-7B", avg: 61.4, values: [56.5, 58.0, 65.7, 66.5, 63.3, 75.3, 60.4, 51.4, 71.4, 55.3, 61.4]},
                { model: "UI-TARS-72B", avg: 73.7, values: [77.1, 69.8, 75.5, 78.8, 75.2, 80.9, 73.9, 66.0, 80.9, 69.4, 73.7]},
                { model: "Aguvis-7B", avg: 53.2, values: [45.1, 47.6, 60.3, 60.2, 56.3, 74.2, 54.8, 35.7, 61.1, 48.4, 53.2]},
                { model: "Qwen2.5-VL-3B", avg: 41.7, values: [39.9, 38.7, 44.5, 48.3, 46.9, 69.7, 29.0, 32.0, 51.4, 35.8, 41.7]},
                { model: "Qwen2.5-VL-7B", avg: 53.8, values: [56.9, 41.6, 61.7, 59.5, 59.4, 74.7, 42.8, 46.2, 58.4, 51.0, 53.8]},
                { model: "Qwen2.5-VL-72B", avg: 51.4, values: [49.0, 47.2, 55.3, 63.9, 64.0, 62.4, 35.5, 42.7, 49.6, 52.5, 51.4]},
                { model: "OmniParser-V2", avg: 54.8, values: [40.7, 42.4, 69.4, 72.2, 61.6, 64.4, 60.9, 29.4, 57.0, 53.5, 54.8]},
                { model: "InfiGUI-R1", avg: 69.7, values:[71.7, 57.2, 78.2, 71.6, 67.5, 82.6, 74.2, 60.4, 78.7, 64.2, 69.7]},
                { model: "UI-R1", avg:58.5, values: [58.1, 46.2, 67.8, 61.7, 54.9, 70.8, 59.1, 53.1, 67.9, 52.8, 58.5]}
            ];

            singleTableData.sort((a, b) => b.avg - a.avg);

            tableHtml = `
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2">Model</th>
                            <th colspan="3">Platform</th>
                            <th colspan="5">Element Type</th>
                            <th colspan="2">Implicitness</th>
                            <th rowspan="2">Avg.</th>
                        </tr>
                        <tr>
                            <th>Web</th>
                            <th>Desktop</th>
                            <th>Mobile</th>
                            <th>Button</th>
                            <th>Icon</th>
                            <th>Dropdown</th>
                            <th>Input</th>
                            <th>Toggle</th>
                            <th>Explicit</th>
                            <th>Implicit</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${singleTableData.map(row => `
                            <tr>
                                <td>${row.model}</td>
                                ${row.values.map(value => `<td>${value}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
            `;
        }
        document.getElementById("plused").innerHTML = tableHtml;
    }
});

// aguvis
// Accuracy: 0.5322
// El Type: button, num: 269
//   Accuracy: 0.6022
// El Type: icon, num: 286
//   Accuracy: 0.5629
// El Type: toggle, num: 403
//   Accuracy: 0.3573
// El Type: dropdown, num: 178
//   Accuracy: 0.7416
// El Type: input, num: 341
//   Accuracy: 0.5484
// Implicit Type: 2
//   Accuracy: 0.4842
// Implicit Type: 1
//   Accuracy: 0.6107
// Platform Type: web, num: 253
//   Accuracy: 0.4506
// Platform Type: desktop, num: 519
//   Accuracy: 0.4759
// Platform Type: mobile, num: 705
//   Accuracy: 0.6028

// uitars-7b-dpo
// Accuracy: 0.6141
// El Type: button, num: 269
//   Accuracy: 0.6654
// El Type: icon, num: 286
//   Accuracy: 0.6329
// El Type: toggle, num: 403
//   Accuracy: 0.5136
// El Type: dropdown, num: 178
//   Accuracy: 0.7528
// El Type: input, num: 341
//   Accuracy: 0.6041
// Implicit Type: 2
//   Accuracy: 0.5529
// Implicit Type: 1
//   Accuracy: 0.7143
// Platform Type: web, num: 253
//   Accuracy: 0.5652
// Platform Type: desktop, num: 519
//   Accuracy: 0.5800
// Platform Type: mobile, num: 705
//   Accuracy: 0.6567

// uitars-72b-dpo
// Accuracy: 0.7373
// El Type: button, num: 269
//   Accuracy: 0.7881
// El Type: icon, num: 286
//   Accuracy: 0.7517
// El Type: toggle, num: 403
//   Accuracy: 0.6600
// El Type: dropdown, num: 178
//   Accuracy: 0.8090
// El Type: input, num: 341
//   Accuracy: 0.7390
// Implicit Type: 2
//   Accuracy: 0.6936
// Implicit Type: 1
//   Accuracy: 0.8089
// Platform Type: web, num: 253
//   Accuracy: 0.7708
// Platform Type: desktop, num: 519
//   Accuracy: 0.6975
// Platform Type: mobile, num: 705
//   Accuracy: 0.7546

// uground-v1-2b
// Accuracy: 0.5735
// El Type: button, num: 269
//   Accuracy: 0.5762
// El Type: icon, num: 286
//   Accuracy: 0.5070
// El Type: toggle, num: 403
//   Accuracy: 0.4467
// El Type: dropdown, num: 178
//   Accuracy: 0.8202
// El Type: input, num: 341
//   Accuracy: 0.6481
// Implicit Type: 2
//   Accuracy: 0.4787
// Implicit Type: 1
//   Accuracy: 0.7286
// Platform Type: web, num: 253
//   Accuracy: 0.6640
// Platform Type: desktop, num: 519
//   Accuracy: 0.4952
// Platform Type: mobile, num: 705
//   Accuracy: 0.5986

// uground-v1-72b
// Accuracy: 0.7630
// El Type: button, num: 269
//   Accuracy: 0.7955
// El Type: icon, num: 286
//   Accuracy: 0.7552
// El Type: toggle, num: 403
//   Accuracy: 0.6873
// El Type: dropdown, num: 178
//   Accuracy: 0.9326
// El Type: input, num: 341
//   Accuracy: 0.7449
// Implicit Type: 2
//   Accuracy: 0.7132
// Implicit Type: 1
//   Accuracy: 0.8446
// Platform Type: web, num: 253
//   Accuracy: 0.7470
// Platform Type: desktop, num: 519
//   Accuracy: 0.7457
// Platform Type: mobile, num: 705
//   Accuracy: 0.7816

// uground-v1-7b
// Accuracy: 0.7028
// El Type: button, num: 269
//   Accuracy: 0.7286
// El Type: icon, num: 286
//   Accuracy: 0.6294
// El Type: toggle, num: 403
//   Accuracy: 0.6352
// El Type: dropdown, num: 178
//   Accuracy: 0.8371
// El Type: input, num: 341
//   Accuracy: 0.7537
// Implicit Type: 2
//   Accuracy: 0.6358
// Implicit Type: 1
//   Accuracy: 0.8125
// Platform Type: web, num: 253
//   Accuracy: 0.7075
// Platform Type: desktop, num: 519
//   Accuracy: 0.6570
// Platform Type: mobile, num: 705
//   Accuracy: 0.7348

// qwen2.5vl 3b
// Accuracy: 0.4171
// El Type: button, num: 269
//   Accuracy: 0.4833
// El Type: icon, num: 286
//   Accuracy: 0.4685
// El Type: toggle, num: 403
//   Accuracy: 0.3201
// El Type: dropdown, num: 178
//   Accuracy: 0.6966
// El Type: input, num: 341
//   Accuracy: 0.2903
// Implicit Type: 2
//   Accuracy: 0.3577
// Implicit Type: 1
//   Accuracy: 0.5143
// Platform Type: web, num: 253
//   Accuracy: 0.3992
// Platform Type: desktop, num: 519
//   Accuracy: 0.3873
// Platform Type: mobile, num: 705
//   Accuracy: 0.4454

// qwen2.5vl 7b
// Accuracy: 0.5383
// El Type: button, num: 269
//   Accuracy: 0.5948
// El Type: icon, num: 286
//   Accuracy: 0.5944
// El Type: toggle, num: 403
//   Accuracy: 0.4615
// El Type: dropdown, num: 178
//   Accuracy: 0.7472
// El Type: input, num: 341
//   Accuracy: 0.4282
// Implicit Type: 2
//   Accuracy: 0.5104
// Implicit Type: 1
//   Accuracy: 0.5839
// Platform Type: web, num: 253
//   Accuracy: 0.5692
// Platform Type: desktop, num: 519
//   Accuracy: 0.4162
// Platform Type: mobile, num: 705
//   Accuracy: 0.6170

// qwen2.5vl 72b
// Accuracy: 0.5139
// El Type: button, num: 269
//   Accuracy: 0.6394
// El Type: icon, num: 286
//   Accuracy: 0.6399
// El Type: toggle, num: 403
//   Accuracy: 0.4268
// El Type: dropdown, num: 178
//   Accuracy: 0.6236
// El Type: input, num: 341
//   Accuracy: 0.3548
// Implicit Type: 2
//   Accuracy: 0.5245
// Implicit Type: 1
//   Accuracy: 0.4964
// Platform Type: web, num: 253
//   Accuracy: 0.4901
// Platform Type: desktop, num: 519
//   Accuracy: 0.4721
// Platform Type: mobile, num: 705
//   Accuracy: 0.5532

// qwen2.5vl-7b screenspot 
// Accuracy: 0.7562893081761006
// El Type: icondesktop, num: 140
//   Accuracy: 0.5286
// El Type: textdesktop, num: 194
//   Accuracy: 0.8247
// El Type: iconmobile, num: 229
//   Accuracy: 0.6725
// El Type: textmobile, num: 273
//   Accuracy: 0.9267
// El Type: textweb, num: 230
//   Accuracy: 0.8261
// El Type: iconweb, num: 206
//   Accuracy: 0.6359

// qwen2.5vl-3b screenspot

// Accuracy: 0.5833333333333334
// El Type: icondesktop, num: 140
//   Accuracy: 0.3357
// El Type: textdesktop, num: 194
//   Accuracy: 0.7062
// El Type: iconmobile, num: 229
//   Accuracy: 0.4017
// El Type: textmobile, num: 273
//   Accuracy: 0.7179
// El Type: textweb, num: 230
//   Accuracy: 0.7043
// El Type: iconweb, num: 206
//   Accuracy: 0.5243
// Format Error: 0

// qwen2.5vl-72b screenspot
// Accuracy: 0.4331761006289308
// El Type: icondesktop, num: 140
//   Accuracy: 0.2929
// El Type: textdesktop, num: 194
//   Accuracy: 0.4021
// El Type: iconmobile, num: 229
//   Accuracy: 0.4672
// El Type: textmobile, num: 273
//   Accuracy: 0.4945
// El Type: textweb, num: 230
//   Accuracy: 0.4652
// El Type: iconweb, num: 206
//   Accuracy: 0.4029
// Format Error: 0